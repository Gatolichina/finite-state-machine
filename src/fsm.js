class FSM {




    /**
     * Creates new FSM instance.
     * @param config
     */
    constructor(config) {
      if(config==undefined){
        throw new Error('Error');
      }
      else {
        this.configcopy=config;
        this.top=this.configcopy.initial;
      }
    }

    /**
     * Returns active state.
     * @returns {String}
     */
    getState() {
        return this.top;
    }

    /**
     * Goes to specified state.
     * @param state
     */
    changeState(state) {
      var points=Object.keys(this.configcopy.states);
      var counter=0;
      for(var i=0;i<points.length;i++){
        if(points[i]==state){
          this.top=state;
          counter+=1;
          break;
        }
      }

      if(counter==0){throw new Error('Error');}
    }

    /**
     * Changes state according to event transition rules.
     * @param event
     */
    trigger(event) {}

    /**
     * Resets FSM state to initial.
     */
    reset() {
      this.top=this.configcopy.initial;
    }

    /**
     * Returns an array of states for which there are specified event transition rules.
     * Returns all states if argument is undefined.
     * @param event
     * @returns {Array}
     */
    getStates(event) {
      var sts=Object.keys(this.configcopy.states);
      if(events==undefined){
        return sts;
      }
      
    }

    /**
     * Goes back to previous state.
     * Returns false if undo is not available.
     * @returns {Boolean}
     */
    undo() {}

    /**
     * Goes redo to state.
     * Returns false if redo is not available.
     * @returns {Boolean}
     */
    redo() {}

    /**
     * Clears transition history
     */
    clearHistory() {}
}

module.exports = FSM;

/** @Created by Uladzimir Halushka **/
