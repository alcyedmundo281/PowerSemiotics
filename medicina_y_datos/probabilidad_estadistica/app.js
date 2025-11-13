(function () {
  const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

  const syncRangeAndNumber = (rangeEl, numberEl, onChange) => {
    if (!rangeEl || !numberEl) return;

    const handleNumber = () => {
      const parsed = Number(numberEl.value);
      if (!Number.isFinite(parsed)) {
        numberEl.value = rangeEl.value;
        return;
      }
      const clamped = clamp(parsed, Number(rangeEl.min), Number(rangeEl.max));
      numberEl.value = clamped;
      rangeEl.value = clamped;
      onChange();
    };

    const handleRange = () => {
      numberEl.value = rangeEl.value;
      onChange();
    };

    numberEl.addEventListener('input', handleNumber);
    rangeEl.addEventListener('input', handleRange);
  };

  const formatNumber = (value, digits = 1) =>
    Number.isFinite(value) ? Number(value).toFixed(digits) : '—';

  const updateBayesCalculator = () => {
    const priorInput = document.getElementById('bayes-prior');
    const priorRange = document.getElementById('bayes-prior-range');
    const sensitivityInput = document.getElementById('bayes-sensitivity');
    const sensitivityRange = document.getElementById('bayes-sensitivity-range');
    const specificityInput = document.getElementById('bayes-specificity');
    const specificityRange = document.getElementById('bayes-specificity-range');
    const resultEl = document.getElementById('bayes-result');
    const interpretationEl = document.getElementById('bayes-interpretation');
    const exampleButton = document.getElementById('bayes-example');
    const resetButton = document.getElementById('bayes-reset');

    if (
      !priorInput ||
      !priorRange ||
      !sensitivityInput ||
      !sensitivityRange ||
      !specificityInput ||
      !specificityRange ||
      !resultEl ||
      !interpretationEl
    ) {
      return;
    }

    const defaults = { prior: 15, sensitivity: 92, specificity: 95 };
    const example = { prior: 30, sensitivity: 85, specificity: 95 };

    const computePPV = (prior, sensitivity, specificity) => {
      const p = prior / 100;
      const sens = sensitivity / 100;
      const spec = specificity / 100;
      const denominator = sens * p + (1 - spec) * (1 - p);
      if (denominator <= 0) return 0;
      const ppv = (sens * p) / denominator;
      return clamp(ppv * 100, 0, 100);
    };

    const buildInterpretation = (prior, ppv) => {
      const change = ppv - prior;
      const direction = change >= 0 ? 'aumenta' : 'disminuye';
      const intensity = Math.abs(change);
      let summary;

      if (ppv >= 85) {
        summary =
          'El resultado positivo casi confirma la sospecha. Actúa como si la enfermedad estuviera presente salvo contraindicación.';
      } else if (ppv >= 60) {
        summary =
          'La prueba aporta evidencia sólida. Combínala con el cuadro clínico antes de tomar decisiones definitivas.';
      } else if (ppv >= 30) {
        summary =
          'El resultado no es concluyente. Considera pruebas adicionales o seguimiento estrecho.';
      } else {
        summary =
          'La probabilidad posterior sigue siendo baja. Prioriza diagnósticos alternativos y comunica la incertidumbre.';
      }

      const changeText =
        intensity < 1
          ? 'El resultado apenas modifica la sospecha inicial.'
          : `La probabilidad ${direction} ${formatNumber(intensity, 1)} puntos porcentuales respecto al valor previo.`;

      return `${summary}\n\n${changeText}`;
    };

    const render = () => {
      const prior = Number(priorInput.value) || 0;
      const sensitivity = Number(sensitivityInput.value) || 0;
      const specificity = Number(specificityInput.value) || 0;

      const ppv = computePPV(prior, sensitivity, specificity);
      resultEl.textContent = `${formatNumber(ppv, 1)}%`;
      interpretationEl.textContent = buildInterpretation(prior, ppv);
    };

    syncRangeAndNumber(priorRange, priorInput, render);
    syncRangeAndNumber(sensitivityRange, sensitivityInput, render);
    syncRangeAndNumber(specificityRange, specificityInput, render);

    if (exampleButton) {
      exampleButton.addEventListener('click', (event) => {
        event.preventDefault();
        priorInput.value = String(example.prior);
        priorRange.value = String(example.prior);
        sensitivityInput.value = String(example.sensitivity);
        sensitivityRange.value = String(example.sensitivity);
        specificityInput.value = String(example.specificity);
        specificityRange.value = String(example.specificity);
        render();
      });
    }

    if (resetButton) {
      resetButton.addEventListener('click', (event) => {
        event.preventDefault();
        priorInput.value = String(defaults.prior);
        priorRange.value = String(defaults.prior);
        sensitivityInput.value = String(defaults.sensitivity);
        sensitivityRange.value = String(defaults.sensitivity);
        specificityInput.value = String(defaults.specificity);
        specificityRange.value = String(defaults.specificity);
        render();
      });
    }

    render();
  };

  const setupConfidenceIntervalCalculator = () => {
    const sampleSizeInput = document.getElementById('ci-sample-size');
    const sampleSizeRange = document.getElementById('ci-sample-size-range');
    const sampleMeanInput = document.getElementById('ci-sample-mean');
    const sampleMeanRange = document.getElementById('ci-sample-mean-range');
    const stdDevInput = document.getElementById('ci-std-dev');
    const stdDevRange = document.getElementById('ci-std-dev-range');
    const confidenceSelect = document.getElementById('ci-confidence');
    const nullInput = document.getElementById('ci-null');
    const exampleButton = document.getElementById('ci-example');
    const resetButton = document.getElementById('ci-reset');

    const degreesEl = document.getElementById('ci-degrees');
    const stdErrorEl = document.getElementById('ci-std-error');
    const tCriticalEl = document.getElementById('ci-t-critical');
    const marginEl = document.getElementById('ci-margin');
    const lowerEl = document.getElementById('ci-lower');
    const upperEl = document.getElementById('ci-upper');
    const statusEl = document.getElementById('ci-null-status');
    const errorEl = document.getElementById('ci-error');
    const plotEl = document.getElementById('ci-plot');

    if (
      !sampleSizeInput ||
      !sampleSizeRange ||
      !sampleMeanInput ||
      !sampleMeanRange ||
      !stdDevInput ||
      !stdDevRange ||
      !confidenceSelect ||
      !nullInput ||
      !degreesEl ||
      !stdErrorEl ||
      !tCriticalEl ||
      !marginEl ||
      !lowerEl ||
      !upperEl ||
      !statusEl ||
      !errorEl ||
      !plotEl
    ) {
      return;
    }

    const defaults = {
      size: 50,
      mean: 120,
      stdDev: 15,
      confidence: 95,
      nullMean: 125,
    };
    const example = {
      size: 100,
      mean: 135,
      stdDev: 12,
      confidence: 95,
      nullMean: 140,
    };

    const getCriticalValue = (confidence) => {
      const map = { 90: 1.645, 95: 1.96, 99: 2.576 };
      return map[confidence] || 1.96;
    };

    const buildNullStatus = (nullMean, lower, upper) => {
      if (!Number.isFinite(nullMean)) return '';
      if (nullMean >= lower && nullMean <= upper) {
        statusEl.className = 'mt-2 text-sm text-emerald-700';
        return `La media hipotética de ${formatNumber(nullMean, 1)} mmHg cae dentro del intervalo. No hay evidencia suficiente para rechazar H₀.`;
      }
      statusEl.className = 'mt-2 text-sm text-rose-600';
      const direction = nullMean > upper ? 'mayor' : 'menor';
      return `La media hipotética de ${formatNumber(nullMean, 1)} mmHg queda fuera del intervalo (${direction}). Los datos sugieren una diferencia clínica relevante.`;
    };

    const render = () => {
      const n = Number(sampleSizeInput.value);
      const mean = Number(sampleMeanInput.value);
      const stdDev = Number(stdDevInput.value);
      const confidence = Number(confidenceSelect.value);
      const nullMean = Number(nullInput.value);

      const valid = n > 1 && stdDev > 0;

      if (!valid) {
        degreesEl.textContent = '—';
        stdErrorEl.textContent = '—';
        tCriticalEl.textContent = '—';
        marginEl.textContent = '—';
        lowerEl.textContent = '—';
        upperEl.textContent = '—';
        statusEl.textContent = '';
        errorEl.classList.remove('hidden');
        renderConfidencePlot(plotEl, null);
        return;
      }

      errorEl.classList.add('hidden');

      const degrees = n - 1;
      const stdError = stdDev / Math.sqrt(n);
      const tCritical = getCriticalValue(confidence);
      const margin = tCritical * stdError;
      const lower = mean - margin;
      const upper = mean + margin;

      degreesEl.textContent = formatNumber(degrees, 0);
      stdErrorEl.textContent = formatNumber(stdError, 2);
      tCriticalEl.textContent = formatNumber(tCritical, 3);
      marginEl.textContent = formatNumber(margin, 2);
      lowerEl.textContent = formatNumber(lower, 1);
      upperEl.textContent = formatNumber(upper, 1);
      statusEl.textContent = buildNullStatus(nullMean, lower, upper);

      renderConfidencePlot(plotEl, {
        mean,
        stdError,
        ciLower: lower,
        ciUpper: upper,
        confidenceLevel: confidence,
        nullHypothesisMean: nullMean,
      });
    };

    syncRangeAndNumber(sampleSizeRange, sampleSizeInput, render);
    syncRangeAndNumber(sampleMeanRange, sampleMeanInput, render);
    syncRangeAndNumber(stdDevRange, stdDevInput, render);

    confidenceSelect.addEventListener('change', render);
    nullInput.addEventListener('input', render);

    if (exampleButton) {
      exampleButton.addEventListener('click', (event) => {
        event.preventDefault();
        sampleSizeInput.value = String(example.size);
        sampleSizeRange.value = String(example.size);
        sampleMeanInput.value = String(example.mean);
        sampleMeanRange.value = String(example.mean);
        stdDevInput.value = String(example.stdDev);
        stdDevRange.value = String(example.stdDev);
        confidenceSelect.value = String(example.confidence);
        nullInput.value = String(example.nullMean);
        render();
      });
    }

    if (resetButton) {
      resetButton.addEventListener('click', (event) => {
        event.preventDefault();
        sampleSizeInput.value = String(defaults.size);
        sampleSizeRange.value = String(defaults.size);
        sampleMeanInput.value = String(defaults.mean);
        sampleMeanRange.value = String(defaults.mean);
        stdDevInput.value = String(defaults.stdDev);
        stdDevRange.value = String(defaults.stdDev);
        confidenceSelect.value = String(defaults.confidence);
        nullInput.value = String(defaults.nullMean);
        render();
      });
    }

    render();
  };

  const renderConfidencePlot = (svgElement, params) => {
    if (!svgElement) return;
    const NS = 'http://www.w3.org/2000/svg';
    svgElement.innerHTML = '';
    svgElement.setAttribute('viewBox', '0 0 350 180');

    if (!params || !Number.isFinite(params.stdError) || params.stdError <= 0) {
      const text = document.createElementNS(NS, 'text');
      text.setAttribute('x', '175');
      text.setAttribute('y', '90');
      text.setAttribute('text-anchor', 'middle');
      text.setAttribute('fill', '#6b7280');
      text.setAttribute('font-size', '14');
      text.textContent = 'Ajusta los parámetros para ver la gráfica';
      svgElement.appendChild(text);
      return;
    }

    const {
      mean,
      stdError,
      ciLower,
      ciUpper,
      confidenceLevel,
      nullHypothesisMean,
    } = params;

    const width = 350;
    const height = 180;
    const padding = { top: 20, right: 20, bottom: 40, left: 20 };
    const plotWidth = width - padding.left - padding.right;
    const plotHeight = height - padding.top - padding.bottom;

    const pdf = (x) => Math.exp(-0.5 * x * x) / Math.sqrt(2 * Math.PI);

    const minXData = mean - 4 * stdError;
    const maxXData = mean + 4 * stdError;
    const xToPixel = (value) =>
      padding.left + ((value - minXData) / (maxXData - minXData)) * plotWidth;

    const maxYData = pdf(0);
    const yToPixel = (value) =>
      padding.top + plotHeight - (value / maxYData) * plotHeight;
    const baseY = yToPixel(0);

    const curvePath = (() => {
      const points = [];
      const steps = 120;
      for (let i = 0; i <= steps; i += 1) {
        const xData = minXData + (i / steps) * (maxXData - minXData);
        const standardized = (xData - mean) / stdError;
        const yData = pdf(standardized);
        points.push(
          `${xToPixel(xData).toFixed(2)},${yToPixel(yData).toFixed(2)}`,
        );
      }
      return `M ${points.join(' L ')}`;
    })();

    const areaPath = (() => {
      const start = Math.max(ciLower, minXData);
      const end = Math.min(ciUpper, maxXData);
      if (start >= end) return '';
      const points = [`M ${xToPixel(start).toFixed(2)},${baseY.toFixed(2)}`];
      const steps = 80;
      for (let i = 0; i <= steps; i += 1) {
        const xData = start + (i / steps) * (end - start);
        const standardized = (xData - mean) / stdError;
        const yData = pdf(standardized);
        points.push(
          `L ${xToPixel(xData).toFixed(2)},${yToPixel(yData).toFixed(2)}`,
        );
      }
      points.push(`L ${xToPixel(end).toFixed(2)},${baseY.toFixed(2)} Z`);
      return points.join(' ');
    })();

    if (areaPath) {
      const area = document.createElementNS(NS, 'path');
      area.setAttribute('d', areaPath);
      area.setAttribute('fill', 'rgba(199, 210, 254, 0.8)');
      svgElement.appendChild(area);
    }

    const curve = document.createElementNS(NS, 'path');
    curve.setAttribute('d', curvePath);
    curve.setAttribute('stroke', '#6366f1');
    curve.setAttribute('stroke-width', '2');
    curve.setAttribute('fill', 'none');
    svgElement.appendChild(curve);

    const axis = document.createElementNS(NS, 'line');
    axis.setAttribute('x1', padding.left);
    axis.setAttribute('y1', baseY);
    axis.setAttribute('x2', width - padding.right);
    axis.setAttribute('y2', baseY);
    axis.setAttribute('stroke', '#9ca3af');
    svgElement.appendChild(axis);

    const addMarker = (x, text, options = {}) => {
      const line = document.createElementNS(NS, 'line');
      line.setAttribute('x1', x);
      line.setAttribute('x2', x);
      line.setAttribute('y1', options.top || padding.top);
      line.setAttribute('y2', options.bottom || baseY + 5);
      line.setAttribute('stroke', options.stroke || '#6366f1');
      line.setAttribute('stroke-width', options.strokeWidth || '1.5');
      if (options.dash) {
        line.setAttribute('stroke-dasharray', options.dash);
      }
      svgElement.appendChild(line);

      const label = document.createElementNS(NS, 'text');
      label.setAttribute('x', x);
      label.setAttribute(
        'y',
        options.labelY || (options.top ? options.top - 5 : baseY + 18),
      );
      label.setAttribute('text-anchor', 'middle');
      label.setAttribute('font-size', options.fontSize || '10');
      label.setAttribute('fill', options.color || '#4338ca');
      if (options.fontWeight) {
        label.setAttribute('font-weight', options.fontWeight);
      }
      label.textContent = text;
      svgElement.appendChild(label);
    };

    const meanPx = xToPixel(mean);
    addMarker(meanPx, formatNumber(mean, 1), {
      top: baseY - 10,
      bottom: baseY + 5,
      stroke: '#4f46e5',
      color: '#4f46e5',
      fontWeight: 'bold',
    });

    const lowerPx = xToPixel(ciLower);
    addMarker(lowerPx, formatNumber(ciLower, 1));

    const upperPx = xToPixel(ciUpper);
    addMarker(upperPx, formatNumber(ciUpper, 1));

    const confidenceY = yToPixel(maxYData / 2.5);
    const confidenceLine = document.createElementNS(NS, 'line');
    confidenceLine.setAttribute('x1', lowerPx);
    confidenceLine.setAttribute('x2', upperPx);
    confidenceLine.setAttribute('y1', confidenceY);
    confidenceLine.setAttribute('y2', confidenceY);
    confidenceLine.setAttribute('stroke', '#4338ca');
    confidenceLine.setAttribute('stroke-dasharray', '3,2');
    svgElement.appendChild(confidenceLine);

    const confidenceLabel = document.createElementNS(NS, 'text');
    confidenceLabel.setAttribute('x', meanPx);
    confidenceLabel.setAttribute('y', confidenceY - 5);
    confidenceLabel.setAttribute('text-anchor', 'middle');
    confidenceLabel.setAttribute('font-size', '11');
    confidenceLabel.setAttribute('font-weight', '600');
    confidenceLabel.setAttribute('fill', '#4338ca');
    confidenceLabel.textContent = `${confidenceLevel}%`;
    svgElement.appendChild(confidenceLabel);

    if (Number.isFinite(nullHypothesisMean)) {
      const nullPx = xToPixel(nullHypothesisMean);
      if (nullPx >= padding.left && nullPx <= width - padding.right) {
        addMarker(nullPx, `μ₀ = ${formatNumber(nullHypothesisMean, 1)}`, {
          top: padding.top,
          bottom: baseY + 5,
          stroke:
            nullHypothesisMean >= ciLower && nullHypothesisMean <= ciUpper
              ? '#0e7490'
              : '#be123c',
          strokeWidth: '1.5',
          dash: '4,2',
          color:
            nullHypothesisMean >= ciLower && nullHypothesisMean <= ciUpper
              ? '#0e7490'
              : '#be123c',
          fontWeight: 'bold',
          labelY: padding.top - 5,
        });
      }
    }

    const tooltipGroup = document.createElementNS(NS, 'g');
    tooltipGroup.classList.add('ci-tooltip');
    tooltipGroup.style.display = 'none';

    const tooltipRect = document.createElementNS(NS, 'rect');
    tooltipRect.setAttribute('x', '-70');
    tooltipRect.setAttribute('y', '0');
    tooltipRect.setAttribute('width', '140');
    tooltipRect.setAttribute('height', '44');
    tooltipRect.setAttribute('rx', '6');
    tooltipRect.setAttribute('fill', '#1f2937');
    tooltipRect.setAttribute('stroke', '#4b5563');
    tooltipRect.setAttribute('stroke-width', '1');

    const tooltipValue = document.createElementNS(NS, 'text');
    tooltipValue.setAttribute('x', '0');
    tooltipValue.setAttribute('y', '18');
    tooltipValue.setAttribute('fill', '#ffffff');
    tooltipValue.setAttribute('font-size', '12');
    tooltipValue.setAttribute('font-weight', 'bold');
    tooltipValue.setAttribute('text-anchor', 'middle');

    const tooltipStatus = document.createElementNS(NS, 'text');
    tooltipStatus.setAttribute('x', '0');
    tooltipStatus.setAttribute('y', '32');
    tooltipStatus.setAttribute('fill', '#d1d5db');
    tooltipStatus.setAttribute('font-size', '10');
    tooltipStatus.setAttribute('text-anchor', 'middle');

    tooltipGroup.appendChild(tooltipRect);
    tooltipGroup.appendChild(tooltipValue);
    tooltipGroup.appendChild(tooltipStatus);
    svgElement.appendChild(tooltipGroup);

    const hoverRect = document.createElementNS(NS, 'rect');
    hoverRect.setAttribute('x', padding.left);
    hoverRect.setAttribute('y', padding.top);
    hoverRect.setAttribute('width', plotWidth);
    hoverRect.setAttribute('height', plotHeight);
    hoverRect.setAttribute('fill', 'transparent');
    svgElement.appendChild(hoverRect);

    const handleMove = (event) => {
      const point = svgElement.createSVGPoint();
      point.x = event.clientX;
      point.y = event.clientY;
      const screenCTM = svgElement.getScreenCTM();
      if (!screenCTM) {
        return;
      }
      const cursor = point.matrixTransform(screenCTM.inverse());
      const clampedX = clamp(cursor.x, padding.left, width - padding.right);
      const xDataValue =
        minXData +
        ((clampedX - padding.left) / plotWidth) * (maxXData - minXData);
      const tooltipY = clamp(
        cursor.y - 50,
        padding.top + 5,
        height - padding.bottom - 45,
      );

      tooltipGroup.style.display = 'block';
      tooltipGroup.setAttribute(
        'transform',
        `translate(${clampedX}, ${tooltipY})`,
      );
      tooltipValue.textContent = `${formatNumber(xDataValue, 1)} mmHg`;
      const inside = xDataValue >= ciLower && xDataValue <= ciUpper;
      tooltipStatus.textContent = inside
        ? `(Dentro del IC ${confidenceLevel}%)`
        : `(Fuera del IC ${confidenceLevel}%)`;
    };

    const handleLeave = () => {
      tooltipGroup.style.display = 'none';
    };

    hoverRect.addEventListener('mousemove', handleMove);
    hoverRect.addEventListener('mouseleave', handleLeave);
  };

  const setupTutor = () => {
    const toggleButton = document.getElementById('tutor-toggle');
    const panel = document.getElementById('tutor-panel');
    const closeButton = document.getElementById('tutor-close');
    const messagesContainer = document.getElementById('tutor-messages');
    const form = document.getElementById('tutor-form');
    const input = document.getElementById('tutor-input');

    if (
      !toggleButton ||
      !panel ||
      !closeButton ||
      !messagesContainer ||
      !form ||
      !input
    ) {
      return;
    }

    let initialized = false;
    let typingIndicator = null;

    const appendMessage = (role, text) => {
      const wrapper = document.createElement('div');
      wrapper.className = `flex ${role === 'user' ? 'justify-end' : 'justify-start'}`;

      const bubble = document.createElement('div');
      bubble.className = `max-w-[80%] p-3 rounded-2xl text-sm ${
        role === 'user'
          ? 'bg-indigo-500 text-white rounded-br-none'
          : 'bg-white text-gray-800 rounded-bl-none shadow-sm'
      }`;
      bubble.innerHTML = text
        .replace(/\n\n/g, '<br><br>')
        .replace(/\n/g, '<br>');

      wrapper.appendChild(bubble);
      messagesContainer.appendChild(wrapper);
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    };

    const showTyping = () => {
      if (typingIndicator) return;
      typingIndicator = document.createElement('div');
      typingIndicator.className = 'flex justify-start';
      typingIndicator.innerHTML = `
        <div class="max-w-[80%] p-3 rounded-2xl bg-white text-gray-800 rounded-bl-none shadow-sm">
          <div class="flex items-center justify-center gap-2">
            <span class="h-2 w-2 bg-indigo-500 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
            <span class="h-2 w-2 bg-indigo-500 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
            <span class="h-2 w-2 bg-indigo-500 rounded-full animate-bounce"></span>
          </div>
        </div>`;
      messagesContainer.appendChild(typingIndicator);
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    };

    const hideTyping = () => {
      if (!typingIndicator) return;
      typingIndicator.remove();
      typingIndicator = null;
    };

    const knowledgeBase = [
      {
        keywords: ['bayes', 'posterior', 'predictivo', 'lr', 'nomograma'],
        response:
          'Para aplicar Bayes identifica tres piezas: probabilidad previa, sensibilidad y especificidad. Convierte cada porcentaje a proporciones, calcula verdaderos y falsos positivos y comunica el nuevo riesgo como “de cada 100 pacientes con este resultado, X realmente tienen la enfermedad”.',
        followUp:
          '¿Quieres que repasemos cómo cambia el valor predictivo si la prevalencia inicial es distinta?',
      },
      {
        keywords: ['sensibilidad', 'especificidad', 'falsos', 'verdaderos'],
        response:
          'La sensibilidad responde “¿a cuántos enfermos detecto?” y la especificidad “¿a cuántos sanos dejo tranquilos?”. Úsalas juntas: sensibilidad alta minimiza falsos negativos, especificidad alta reduce falsos positivos. Evalúa siempre qué error sería más costoso para tu paciente.',
        followUp:
          'Piensa en un ejemplo propio: ¿cuándo priorizarías sensibilidad sobre especificidad?',
      },
      {
        keywords: ['intervalo', 'confianza', 'margen', 'error estándar'],
        response:
          'El intervalo de confianza combina la media muestral con la incertidumbre del muestreo. Error estándar = s/√n, margen = valor crítico × error estándar. Si el valor hipotético queda fuera del intervalo, hay evidencia de diferencia clínica.',
        followUp:
          '¿Quieres que te explique cómo interpretar el valor crítico que aparece en la calculadora?',
      },
      {
        keywords: ['probabilidad previa', 'pretest', 'pre test', 'pre-test'],
        response:
          'La probabilidad previa integra prevalencia local, mecanismo fisiopatológico y datos individuales. Antes de ordenar pruebas, anota un rango (“entre 20 y 30%”). Así podrás juzgar después si el resultado realmente movió la aguja.',
        followUp:
          'Una buena práctica es documentar tu estimación previa en la historia clínica. ¿Lo has intentado?',
      },
      {
        keywords: ['dolor', 'torácico', 'urgencia', 'troponina'],
        response:
          'En dolor torácico combina probabilidad clínica (escala de riesgo) con la cinética de troponina. Un resultado negativo temprano baja la probabilidad pero requiere repetición a las 3 horas antes de decidir el alta.',
        followUp:
          '¿Quieres que repasemos los pasos del mini caso para asegurarte de no omitir nada?',
      },
    ];

    const generalResponses = [
      'Cuando tengas duda, vuelve a los tres pilares: probabilidad previa, desempeño de la prueba e impacto en la decisión clínica.',
      'Intenta explicar el resultado en voz alta usando números naturales (“7 de cada 10”). Si no suena claro, aún falta trabajo.',
      'Puedes usar la calculadora para experimentar. Cambia un parámetro a la vez y anota cómo varía el resultado.',
    ];

    const generateResponse = (question) => {
      const normalized = question.toLowerCase();
      let bestMatch = null;
      let bestScore = 0;

      knowledgeBase.forEach((entry) => {
        const score = entry.keywords.reduce(
          (acc, keyword) => (normalized.includes(keyword) ? acc + 1 : acc),
          0,
        );
        if (score > bestScore) {
          bestScore = score;
          bestMatch = entry;
        }
      });

      if (bestMatch) {
        return `${bestMatch.response}\n\n${bestMatch.followUp}`;
      }

      const fallback =
        generalResponses[Math.floor(Math.random() * generalResponses.length)];
      return `Puedo ayudarte a conectar los cálculos con decisiones clínicas. ${fallback}`;
    };

    const openTutor = () => {
      panel.classList.remove('tutor-hidden');
      toggleButton.classList.add('tutor-hidden');
      if (!initialized) {
        appendMessage(
          'model',
          '¡Hola! Soy tu tutor digital. Pregúntame sobre probabilidad, Bayes o intervalos de confianza y te responderé con ejemplos clínicos.',
        );
        appendMessage(
          'model',
          'Consejo: cambia los valores de las calculadoras y dime qué observas; puedo ayudarte a interpretarlo.',
        );
        initialized = true;
      }
      requestAnimationFrame(() => {
        input.focus();
      });
    };

    const closeTutor = () => {
      panel.classList.add('tutor-hidden');
      toggleButton.classList.remove('tutor-hidden');
    };

    toggleButton.addEventListener('click', openTutor);
    closeButton.addEventListener('click', closeTutor);

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const question = input.value.trim();
      if (!question) return;

      appendMessage('user', question);
      input.value = '';
      showTyping();

      setTimeout(() => {
        hideTyping();
        const response = generateResponse(question);
        appendMessage('model', response);
      }, 400);
    });

    panel.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        closeTutor();
      }
    });
  };

  document.addEventListener('DOMContentLoaded', () => {
    updateBayesCalculator();
    setupConfidenceIntervalCalculator();
    setupTutor();
  });
})();
