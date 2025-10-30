
function CircularProgress({className,strokeWidth=2,value,textClassName}) {
  return (
    <div className={`relative size-10 ${className}`}>
                <svg
                  className="h-full w-full"
                  width="36"
                   strokeWidth={strokeWidth}
                  height="36"
                  viewBox="0 0 36 36"
                >
                  <circle
                    cx="18"
                    cy="18"
                    r="16"
                    fill="none"
                    className="stroke-current text-primary/20"
                    strokeWidth={strokeWidth}
                  ></circle>
                  <g className="origin-center -rotate-90 transform">
                    <circle
                      cx="18"
                      cy="18"
                      r="16"
                      fill="none"
                      className="stroke-current text-primary"
                      strokeWidth={strokeWidth}
                      strokeDasharray="100"
                      strokeDashoffset="50"
                    ></circle>
                  </g>
                </svg>
                <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
                  <span className={`text-center font-bold text-background-foreground ${textClassName}`}>
                    {value || 0}
                  </span>
                  
                </div>
              </div>
  )
}

export default CircularProgress