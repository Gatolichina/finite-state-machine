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
      var eveSt=[];
      if(event==undefined){
        return sts;
      }
      else{
        for(var i=0;i<sts.length;i++){
          var curstate=sts[i];
          var temp1=this.configcopy.states[curstate];
          console.log(temp1);
          var temp2=temp1['transitions'];
          var temp3=Object.keys(temp2);
          console.log(temp2);
          console.log(temp3);
          console.log(temp3.length);
          for(var j=0; j<temp1.length;j++){
              if(temp3[j]==event){
                  eveST.push(curstate);
              }

          }

        //console.log(this.configcopy.states[sts[i]]);

      //console.log(Object.getOwnPropertyNames (this.configcopy.states));

      }
    }
    console.log('gh');
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
