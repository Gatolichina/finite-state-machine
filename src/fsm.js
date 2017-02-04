class His {
    constructor(state) {
        this.action=[state];
        this.present=0;
        this.head = 0;
    }

    adding(state){
      this.action.push(state);
      this.present+=1;
      this.head+=1;
    }
}

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
        this.history=new His(this.top);
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
          if(this.history.head==this.history.present){
             this.history.adding(state);
          }
           else {
             this.history.action[this.history.head+1]=this.top;
             this.history.present+=1;
             this.history.head=this.history.present;
          }
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
    trigger(event) {
      var sts=Object.keys(this.configcopy.states);
      var done=false;
      if(event==undefined){
           throw new Error('Error');
      }
      else{
        for(var i=0;i<sts.length;i++){
          var curstate=sts[i];
          if(curstate==this.top){
             var temp1=this.configcopy.states[curstate];
             var temp2=temp1['transitions'];
             var temp3=Object.keys(temp2);
             for(var j=0;j<temp3.length;j++){
                if(temp3[j]==event){
                  done=true;
                  this.top=temp2[event];
                  if(this.history.head==this.history.present){
                     this.history.adding(this.top);
                  }
                 else {
                    this.history.action[this.history.head+1]=this.top;
                    this.history.present+=1;
                    this.history.head=this.history.present;
                 }

                }
             }
          }
        }
      }
      if(!done){throw new Error('Error!!!!');}
    }


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
          var temp2=temp1['transitions'];
          var temp3=Object.keys(temp2);
          for(var j=0; j<temp3.length;j++){
              if(temp3[j]==event){
                  eveSt.push(curstate);
              }
          }
      }
    }
    return eveSt;
  }


    /**
     * Goes back to previous state.
     * Returns false if undo is not available.
     * @returns {Boolean}
     */
    undo() {
      if(this.history.present<1){
           return false;
      }
      else{
        this.history.present-=1;
        this.top=this.history.action[this.history.present];
        return true;
      }
    }

    /**
     * Goes redo to state.
     * Returns false if redo is not available.
     * @returns {Boolean}
     */
    redo() {
      if(this.history.present==this.history.head){
           return false;
      }
      else{
        this.history.present+=1;
        this.top=this.history.action[this.history.present];
        return true;
      }
    }

    /**
     * Clears transition history
     */
    clearHistory() {
      this.history.action=[];
      this.history.present=0;
      this.history.head=0;
    }
}

module.exports = FSM;

/** @Created by Uladzimir Halushka **/
