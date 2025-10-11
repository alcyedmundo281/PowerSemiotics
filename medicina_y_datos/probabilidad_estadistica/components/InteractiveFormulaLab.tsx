import React, { useState, useMemo } from 'react';
import TDistributionPlot from './TDistributionPlot';

// Simplified t-critical value lookup for common confidence levels
// For a real application, a statistical library would be used.
// These are z-scores, good approximations for large sample sizes (df > 30).
const getTCriticalValue = (confidenceLevel: number, df: number): number => {
  // This is a gross simplification. In reality, it depends heavily on df.
  // We'll use common z-scores as a substitute for simplicity.
  if (df < 1) return NaN;
  const confidenceMap: { [key: number]: number } = {
    90: 1.645,
    95: 1.96,
    99: 2.576,
  };
  return confidenceMap[confidenceLevel] || 1.96;
};

const BayesCalculator = () => {
    const DEFAULT_BAYES = { prior: 15, sensitivity: 92, specificity: 95 };
    const EXAMPLE_BAYES = { prior: 30, sensitivity: 85, specificity: 95 }; // Strep throat example
    const [prior, setPrior] = useState(DEFAULT_BAYES.prior);
    const [sensitivity, setSensitivity] = useState(DEFAULT_BAYES.sensitivity);
    const [specificity, setSpecificity] = useState(DEFAULT_BAYES.specificity);

    const positivePredictiveValue = useMemo(() => {
        const p = prior / 100;
        const sens = sensitivity / 100;
        const spec = specificity / 100;
        if (p === 1 && sens === 1) return 100; // Handle edge case
        const denominator = (sens * p + (1 - spec) * (1 - p));
        if (denominator === 0) return 0;
        const ppv = (sens * p) / denominator;
        return isNaN(ppv) ? 0 : ppv * 100;
    }, [prior, sensitivity, specificity]);

    const handleReset = () => {
        setPrior(DEFAULT_BAYES.prior);
        setSensitivity(DEFAULT_BAYES.sensitivity);
        setSpecificity(DEFAULT_BAYES.specificity);
    };

    const handleExampleData = () => {
        setPrior(EXAMPLE_BAYES.prior);
        setSensitivity(EXAMPLE_BAYES.sensitivity);
        setSpecificity(EXAMPLE_BAYES.specificity);
    };
    
    const handleNumberChange = (setter: React.Dispatch<React.SetStateAction<number>>, value: string) => {
        if (value === '') {
            setter(0);
            return;
        }
        const num = parseInt(value, 10);
        if (!isNaN(num) && num >= 0 && num <= 100) {
            setter(num);
        }
    };


    return (
        <div className="space-y-6">
             <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-3">
                <i className="fas fa-calculator text-indigo-600"></i>
                Calculadora de Teorema de Bayes
             </h3>
             <div className="grid md:grid-cols-2 gap-8 items-start">
                <div className="space-y-4 bg-gray-50 p-6 rounded-xl border border-gray-200">
                     <div>
                        <div className="flex items-center justify-between gap-2 mb-1">
                            <label htmlFor="prior" className="text-sm font-medium text-gray-700">Probabilidad Previa (Prevalencia)</label>
                            <div className="flex items-center gap-1">
                                <input id="prior" type="number" value={prior} onChange={(e) => handleNumberChange(setPrior, e.target.value)} min="0" max="100" className="w-16 p-1 border border-gray-300 rounded-md text-sm text-right" />
                                <span className="text-sm text-gray-500">%</span>
                            </div>
                        </div>
                        <input type="range" min="0" max="100" step="1" value={prior} onChange={(e) => setPrior(Number(e.target.value))} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
                    </div>
                     <div>
                        <div className="flex items-center justify-between gap-2 mb-1">
                            <label htmlFor="sensitivity" className="text-sm font-medium text-gray-700">Sensibilidad</label>
                             <div className="flex items-center gap-1">
                                <input id="sensitivity" type="number" value={sensitivity} onChange={(e) => handleNumberChange(setSensitivity, e.target.value)} min="0" max="100" className="w-16 p-1 border border-gray-300 rounded-md text-sm text-right" />
                                <span className="text-sm text-gray-500">%</span>
                            </div>
                        </div>
                        <input type="range" min="0" max="100" step="1" value={sensitivity} onChange={(e) => setSensitivity(Number(e.target.value))} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
                    </div>
                     <div>
                        <div className="flex items-center justify-between gap-2 mb-1">
                           <label htmlFor="specificity" className="text-sm font-medium text-gray-700">Especificidad</label>
                            <div className="flex items-center gap-1">
                                <input id="specificity" type="number" value={specificity} onChange={(e) => handleNumberChange(setSpecificity, e.target.value)} min="0" max="100" className="w-16 p-1 border border-gray-300 rounded-md text-sm text-right" />
                                <span className="text-sm text-gray-500">%</span>
                            </div>
                        </div>
                        <input type="range" min="0" max="100" step="1" value={specificity} onChange={(e) => setSpecificity(Number(e.target.value))} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
                    </div>
                    <div className="grid grid-cols-2 gap-2 pt-2">
                        <button onClick={handleExampleData} className="w-full px-4 py-2 text-sm font-semibold rounded-full bg-indigo-100 text-indigo-700 border border-indigo-200 hover:bg-indigo-200 transition-colors">
                            <i className="fas fa-lightbulb mr-2"></i>Usar Ejemplo: Faringitis
                        </button>
                        <button onClick={handleReset} className="w-full px-4 py-2 text-sm font-semibold rounded-full bg-white text-gray-700 border hover:bg-gray-100 transition-colors">
                            <i className="fas fa-undo mr-2"></i>Resetear
                        </button>
                    </div>
                </div>
                 <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6 flex flex-col items-center justify-center text-center h-full">
                    <p className="text-sm text-indigo-800 uppercase font-semibold">Valor Predictivo Positivo (VPP)</p>
                    <p className="text-4xl font-bold text-indigo-900 my-2">{positivePredictiveValue.toFixed(1)}%</p>
                    <p className="text-xs text-indigo-700">La probabilidad de tener la enfermedad si la prueba es positiva.</p>
                </div>
             </div>
        </div>
    );
};


const ConfidenceIntervalCalculator = () => {
    const DEFAULTS_CI = { size: 50, mean: 120, stdDev: 15, confidence: 95, nullHypo: 125 };
    const EXAMPLE_CI = { size: 100, mean: 135, stdDev: 12, confidence: 95, nullHypo: 140 }; // Antihypertensive drug trial example
    const [sampleSize, setSampleSize] = useState(DEFAULTS_CI.size);
    const [sampleMean, setSampleMean] = useState(DEFAULTS_CI.mean);
    const [sampleStdDev, setSampleStdDev] = useState(DEFAULTS_CI.stdDev);
    const [confidenceLevel, setConfidenceLevel] = useState(DEFAULTS_CI.confidence);
    const [nullHypothesisMean, setNullHypothesisMean] = useState(DEFAULTS_CI.nullHypo);

    const {
        degreesOfFreedom, stdError, tCritical, marginOfError, ciLower, ciUpper
    } = useMemo(() => {
        const n = sampleSize;
        const s = sampleStdDev;
        const df = n - 1;
        const t = getTCriticalValue(confidenceLevel, df);
        const se = s / Math.sqrt(n);
        const me = t * se;
        const lower = sampleMean - me;
        const upper = sampleMean + me;
        
        return {
            degreesOfFreedom: df, stdError: se, tCritical: t, marginOfError: me, ciLower: lower, ciUpper: upper
        };
    }, [sampleSize, sampleMean, sampleStdDev, confidenceLevel]);

    const handleReset = () => {
        setSampleSize(DEFAULTS_CI.size);
        setSampleMean(DEFAULTS_CI.mean);
        setSampleStdDev(DEFAULTS_CI.stdDev);
        setConfidenceLevel(DEFAULTS_CI.confidence);
        setNullHypothesisMean(DEFAULTS_CI.nullHypo);
    };

    const handleExampleData = () => {
        setSampleSize(EXAMPLE_CI.size);
        setSampleMean(EXAMPLE_CI.mean);
        setSampleStdDev(EXAMPLE_CI.stdDev);
        setConfidenceLevel(EXAMPLE_CI.confidence);
        setNullHypothesisMean(EXAMPLE_CI.nullHypo);
    };

    const NumberInput = ({ label, id, value, onChange, min, max, step, unit }: { label: string, id: string, value: number, onChange: (v: number) => void, min: number, max: number, step: number, unit?: string }) => (
        <div className="flex items-center justify-between gap-2">
            <label htmlFor={id} className="text-sm font-medium text-gray-700 whitespace-nowrap">{label}</label>
            <div className="flex items-center gap-1">
                <input
                    id={id}
                    type="number"
                    value={value}
                    onChange={(e) => {
                         const val = e.target.value === '' ? min : Number(e.target.value);
                         onChange(val);
                    }}
                    min={min}
                    max={max}
                    step={step}
                    className="w-20 p-1 border border-gray-300 rounded-md text-sm"
                    aria-label={label}
                />
                {unit && <span className="text-sm text-gray-500">{unit}</span>}
            </div>
        </div>
    );

    return (
        <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-3">
                <i className="fas fa-chart-line text-indigo-600"></i>
                Explorador de Intervalos de Confianza
            </h3>
            <p className="text-sm text-gray-600">
                Ajusta los parámetros para ver cómo afectan al intervalo de confianza (IC) y su relación con una prueba de hipótesis. Un IC nos da un rango de valores plausibles para la media poblacional verdadera.
            </p>
            <div className="grid lg:grid-cols-2 gap-8 items-start">
                <div className="space-y-4 bg-gray-50 p-6 rounded-xl border border-gray-200">
                    <div>
                        <NumberInput label="Tamaño Muestra (n):" id="sampleSize" value={sampleSize} onChange={setSampleSize} min={2} max={500} step={1} />
                        <input type="range" min="2" max="500" value={sampleSize} onChange={(e) => setSampleSize(Number(e.target.value))} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
                    </div>
                    <div>
                        <NumberInput label="Media Muestral (x̄):" id="sampleMean" value={sampleMean} onChange={setSampleMean} min={80} max={160} step={0.5} unit="mmHg" />
                        <input type="range" min="80" max="160" step="0.5" value={sampleMean} onChange={(e) => setSampleMean(Number(e.target.value))} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
                    </div>
                    <div>
                        <NumberInput label="Desv. Estándar (s):" id="sampleStdDev" value={sampleStdDev} onChange={setSampleStdDev} min={5} max={30} step={0.5} unit="mmHg" />
                        <input type="range" min="5" max="30" step="0.5" value={sampleStdDev} onChange={(e) => setSampleStdDev(Number(e.target.value))} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
                    </div>
                    <div>
                        <NumberInput label="Hipótesis Nula (μ₀):" id="nullHypo" value={nullHypothesisMean} onChange={setNullHypothesisMean} min={80} max={160} step={0.5} unit="mmHg" />
                        <input type="range" min="80" max="160" step="0.5" value={nullHypothesisMean} onChange={(e) => setNullHypothesisMean(Number(e.target.value))} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Nivel de Confianza:</label>
                        <div className="flex justify-between">
                            {[90, 95, 99].map(level => (
                                <button key={level} onClick={() => setConfidenceLevel(level)} className={`px-4 py-2 text-sm font-semibold rounded-full ${confidenceLevel === level ? 'bg-indigo-600 text-white' : 'bg-white text-gray-700 border hover:bg-indigo-50'}`}>
                                    {level}%
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 pt-2">
                         <button onClick={handleExampleData} className="w-full px-4 py-2 text-sm font-semibold rounded-full bg-indigo-100 text-indigo-700 border border-indigo-200 hover:bg-indigo-200 transition-colors">
                            <i className="fas fa-lightbulb mr-2"></i>Usar Ejemplo: Hipotensor
                        </button>
                        <button onClick={handleReset} className="w-full px-4 py-2 text-sm font-semibold rounded-full bg-white text-gray-700 border hover:bg-gray-100 transition-colors">
                            <i className="fas fa-undo mr-2"></i>Resetear
                        </button>
                    </div>
                </div>

                <div className="space-y-4">
                    <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6">
                         <p className="text-center text-sm text-indigo-800 uppercase font-semibold">Intervalo de Confianza del {confidenceLevel}%</p>
                         <p className="text-center text-3xl font-bold text-indigo-900 mt-2">
                             [{ciLower.toFixed(2)}, {ciUpper.toFixed(2)}]
                         </p>
                         <p className="text-center text-sm text-indigo-700 mt-2">
                            Margen de Error: ±{marginOfError.toFixed(2)}
                         </p>
                    </div>
                    <TDistributionPlot mean={sampleMean} stdError={stdError} ciLower={ciLower} ciUpper={ciUpper} confidenceLevel={confidenceLevel} nullHypothesisMean={nullHypothesisMean} />
                    <div className="bg-gray-100 rounded-xl p-4 text-sm text-gray-700">
                      <p className="font-semibold text-gray-900">Punto de reflexión:</p>
                      <p className="mt-2">
                        Si la Hipótesis Nula (μ₀) cae <strong>fuera</strong> del Intervalo de Confianza, el resultado es estadísticamente significativo (p &lt; {((100 - confidenceLevel) / 100).toFixed(2)}).
                      </p>
                    </div>
                    <div className="text-xs text-gray-500 space-y-2 pt-2">
                        <p><strong>Error Estándar (SE):</strong> {stdError.toFixed(3)}</p>
                        <p><strong>Grados de Libertad (df):</strong> {degreesOfFreedom}</p>
                        <p><strong>Valor Crítico (t*):</strong> {tCritical.toFixed(3)} (aprox.)</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const InteractiveFormulaLab: React.FC = () => {
  return (
    <article className="bg-white rounded-2xl shadow-lg p-8 space-y-8">
      <header>
        <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center bg-indigo-600 text-white rounded-full text-lg">
            <i className="fas fa-vial"></i>
          </span>
          Laboratorio de Fórmulas Interactivas
        </h2>
        <p className="mt-4 text-gray-600">
          Usa estas herramientas para obtener una comprensión práctica de los conceptos estadísticos clave. Manipula las variables y observa cómo cambian los resultados en tiempo real.
        </p>
      </header>

      <BayesCalculator />

      <div className="border-t border-gray-200 mt-8 pt-8">
        <ConfidenceIntervalCalculator />
      </div>
    </article>
  );
};

export default InteractiveFormulaLab;