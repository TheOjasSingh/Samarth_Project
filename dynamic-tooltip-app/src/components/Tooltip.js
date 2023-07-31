// src/components/Tooltip.js
import React, { useState } from 'react';

const Tooltip = ({ target, position, style, text }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });

  const showTooltip = () => {
    setIsVisible(true);
  };

  const hideTooltip = () => {
    setIsVisible(false);
  };

  const handleTargetElement = (event) => {
    const { top, left, width, height } = event.target.getBoundingClientRect();

    switch (position) {
      case 'top':
        setTooltipPosition({ top: top - 10, left: left + width / 2 });
        break;
      case 'right':
        setTooltipPosition({ top: top + height / 2, left: left + width + 10 });
        break;
      case 'bottom':
        setTooltipPosition({ top: top + height + 10, left: left + width / 2 });
        break;
      case 'left':
        setTooltipPosition({ top: top + height / 2, left: left - 10 });
        break;
      default:
        setTooltipPosition({ top: top - 10, left: left + width / 2 });
        break;
    }

    showTooltip();
  };

  return (
    <>
      {isVisible && (
        <div className="tooltip" style={{ ...style, top: tooltipPosition.top, left: tooltipPosition.left }}>
          {text}
        </div>
      )}
      {React.cloneElement(target, {
        onMouseEnter: handleTargetElement,
        onMouseLeave: hideTooltip,
      })}
    </>
  );
};

export default Tooltip;
