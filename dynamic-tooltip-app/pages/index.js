// pages/index.js
import React from 'react';
import Tooltip from '../src/components/Tooltip'; // Correct the import path

const IndexPage = () => {
  return (
    <div className="mobile-screen">
      <Tooltip target={<button>Button 1</button>} position="top" text="This is the top tooltip" />
      <Tooltip target={<button>Button 2</button>} position="right" text="This is the right tooltip" />
      <Tooltip target={<button>Button 3</button>} position="bottom" text="This is the bottom tooltip" />
      <Tooltip target={<button>Button 4</button>} position="left" text="This is the left tooltip" />
    </div>
  );
};

export default IndexPage;
