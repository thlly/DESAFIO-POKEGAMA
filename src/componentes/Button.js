import React from 'react';
export default function ContainedButtons(functionButton,functionName) {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
       <button onClick={functionButton}>{functionName}</button>
      </div>
    );
  }