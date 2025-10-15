import React from 'react'

function Step({ num, text }) {
  return (
    <div className="flex items-center space-x-3">
      <div className="flex-shrink-0 size-7 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">
        {num}
      </div>
      <p className="text-sm sm:text-base text-foreground font-base">{text}</p>
    </div>
  );
}

export default Step