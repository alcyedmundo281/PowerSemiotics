import React, { useState } from 'react';

interface TDistributionPlotProps {
  mean: number;
  stdError: number;
  ciLower: number;
  ciUpper: number;
  confidenceLevel: number;
  nullHypothesisMean?: number;
}

// Using standard normal distribution PDF (mean=0, stdDev=1) as a visual approximation for the t-distribution.
const pdf = (x: number): number => {
    return Math.exp(-0.5 * x * x) / Math.sqrt(2 * Math.PI);
};

const TDistributionPlot: React.FC<TDistributionPlotProps> = ({
  mean,
  stdError,
  ciLower,
  ciUpper,
  confidenceLevel,
  nullHypothesisMean,
}) => {
  const [tooltip, setTooltip] = useState<{
    visible: boolean;
    x: number;
    y: number;
    content: string;
    subContent: string;
  } | null>(null);

  const width = 350;
  const height = 180;
  const padding = { top: 20, right: 20, bottom: 40, left: 20 };
  
  const plotWidth = width - padding.left - padding.right;
  const plotHeight = height - padding.top - padding.bottom;

  if (stdError <= 0) {
    // Avoid division by zero and nonsensical plots
    return <div className="w-full h-[180px] flex items-center justify-center bg-gray-100 rounded-lg">Error: Desviación Estándar debe ser positiva.</div>;
  }

  // X-axis scale: map data values (mean +/- 4 SE) to pixels
  const minXData = mean - 4 * stdError;
  const maxXData = mean + 4 * stdError;
  const xToPixel = (value: number): number => 
    padding.left + ((value - minXData) / (maxXData - minXData)) * plotWidth;

  // Y-axis scale: map PDF values to pixels
  const maxYData = pdf(0); // Max height of the standard normal curve
  const yToPixel = (value: number): number => 
    padding.top + plotHeight - (value / maxYData) * plotHeight;
    
  // Generate points for the curve path
  const numPoints = 101;
  let curvePoints: [number, number][] = [];
  for (let i = 0; i < numPoints; i++) {
    const xData = minXData + (i / (numPoints - 1)) * (maxXData - minXData);
    const standardizedX = (xData - mean) / stdError; // Standardize value to use with standard normal PDF
    const yData = pdf(standardizedX);
    curvePoints.push([xToPixel(xData), yToPixel(yData)]);
  }
  const curvePath = "M " + curvePoints.map(p => `${p[0].toFixed(2)},${p[1].toFixed(2)}`).join(" L ");
  
  // Generate path for the shaded confidence interval area
  let areaPath = `M ${xToPixel(ciLower).toFixed(2)},${yToPixel(0).toFixed(2)}`;
  for (let i = 0; i < numPoints; i++) {
    const xData = minXData + (i / (numPoints - 1)) * (maxXData - minXData);
    if (xData >= ciLower && xData <= ciUpper) {
      const standardizedX = (xData - mean) / stdError;
      const yData = pdf(standardizedX);
      areaPath += ` L ${xToPixel(xData).toFixed(2)},${yToPixel(yData).toFixed(2)}`;
    }
  }
  areaPath += ` L ${xToPixel(ciUpper).toFixed(2)},${yToPixel(0).toFixed(2)} Z`;

  const meanPx = xToPixel(mean);
  const ciLowerPx = xToPixel(ciLower);
  const ciUpperPx = xToPixel(ciUpper);

  // Position for confidence level text, slightly above the middle of the curve's height
  const confidenceTextY = yToPixel(maxYData / 2.5);

  const nullHypoPx = nullHypothesisMean ? xToPixel(nullHypothesisMean) : null;
  const isNullHypoInRange = nullHypoPx && nullHypoPx >= padding.left && nullHypoPx <= width - padding.right;
  const isNullHypoInCI = nullHypothesisMean !== undefined && nullHypothesisMean >= ciLower && nullHypothesisMean <= ciUpper;

  const handleMouseMove = (event: React.MouseEvent<SVGRectElement>) => {
    const svg = event.currentTarget.ownerSVGElement;
    if (svg) {
        const pt = svg.createSVGPoint();
        pt.x = event.clientX;
        pt.y = event.clientY;
        const cursorPoint = pt.matrixTransform(svg.getScreenCTM()?.inverse());
        
        const clampedXPixel = Math.max(padding.left, Math.min(cursorPoint.x, width - padding.right));
        const xDataValue = minXData + ((clampedXPixel - padding.left) / plotWidth) * (maxXData - minXData);
        
        const isInsideCI = xDataValue >= ciLower && xDataValue <= ciUpper;
        const content = `${xDataValue.toFixed(1)} mmHg`;
        const subContent = isInsideCI ? `(Dentro del IC ${confidenceLevel}%)` : `(Fuera del IC ${confidenceLevel}%)`;
        
        setTooltip({
            visible: true,
            x: clampedXPixel,
            y: cursorPoint.y,
            content: content,
            subContent: subContent,
        });
    }
  };

  const handleMouseLeave = () => {
      setTooltip(null);
  };

  return (
    <div className="w-full">
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto" aria-labelledby="plotTitle">
            <title id="plotTitle">Gráfico de distribución del intervalo de confianza</title>
            {/* Shaded Area */}
            {areaPath && <path d={areaPath} fill="rgb(199 210 254 / 0.8)" />}

            {/* Curve */}
            <path d={curvePath} stroke="#6366f1" strokeWidth="2" fill="none" />
            
            {/* Axis line */}
            <line x1={padding.left} y1={yToPixel(0)} x2={width - padding.right} y2={yToPixel(0)} stroke="#9ca3af" />
            
            {/* Mean line and text */}
            <line x1={meanPx} y1={yToPixel(0) - 10} x2={meanPx} y2={yToPixel(0) + 5} stroke="#4f46e5" strokeWidth="1.5" />
            <text x={meanPx} y={yToPixel(0) - 15} textAnchor="middle" fontSize="10px" fill="#4f46e5" fontWeight="bold">
                {mean.toFixed(1)}
            </text>

            {/* CI boundary lines and text */}
            <line x1={ciLowerPx} y1={yToPixel(0)} x2={ciLowerPx} y2={yToPixel(0) + 5} stroke="#6366f1" />
            <text x={ciLowerPx} y={yToPixel(0) + 18} textAnchor="middle" fontSize="10px" fill="#4338ca">
                {ciLower.toFixed(1)}
            </text>

            <line x1={ciUpperPx} y1={yToPixel(0)} x2={ciUpperPx} y2={yToPixel(0) + 5} stroke="#6366f1" />
            <text x={ciUpperPx} y={yToPixel(0) + 18} textAnchor="middle" fontSize="10px" fill="#4338ca">
                {ciUpper.toFixed(1)}
            </text>

            {/* Confidence level text with indicator line */}
            <line x1={ciLowerPx} y1={confidenceTextY} x2={ciUpperPx} y2={confidenceTextY} stroke="#4338ca" strokeDasharray="2,2"/>
            <text x={meanPx} y={confidenceTextY - 5} textAnchor="middle" fontSize="11px" fill="#4338ca" fontWeight="600">
                {confidenceLevel}%
            </text>
            
            {/* Null Hypothesis Indicator */}
            {isNullHypoInRange && (
                <g>
                    <line 
                        x1={nullHypoPx} y1={padding.top} 
                        x2={nullHypoPx} y2={yToPixel(0) + 5} 
                        stroke={isNullHypoInCI ? '#0e7490' : '#be123c'}
                        strokeWidth="1.5"
                        strokeDasharray="4,2"
                    />
                    <text 
                        x={nullHypoPx} y={padding.top - 5} 
                        textAnchor="middle" 
                        fontSize="10px" 
                        fill={isNullHypoInCI ? '#0e7490' : '#be123c'}
                        fontWeight="bold"
                    >
                        μ₀ = {nullHypothesisMean?.toFixed(1)}
                    </text>
                </g>
            )}

            {/* Tooltip */}
            {tooltip && tooltip.visible && (
                <g 
                    transform={`translate(${tooltip.x}, ${tooltip.y - 55})`}
                    className="pointer-events-none"
                >
                    <rect 
                        x="-55" 
                        y="0" 
                        width="110" 
                        height="40" 
                        rx="5" 
                        fill="#1f2937" 
                        stroke="#4b5563"
                        strokeWidth="1"
                    />
                    <text x="0" y="18" textAnchor="middle" fill="white" fontSize="12px" fontWeight="bold">
                        {tooltip.content}
                    </text>
                    <text x="0" y="32" textAnchor="middle" fill="#d1d5db" fontSize="10px">
                        {tooltip.subContent}
                    </text>
                </g>
            )}

            {/* Mouse event overlay */}
            <rect 
                x={padding.left} 
                y={padding.top}
                width={plotWidth}
                height={plotHeight}
                fill="transparent"
                className="cursor-crosshair"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
            />
        </svg>
    </div>
  );
};

export default TDistributionPlot;