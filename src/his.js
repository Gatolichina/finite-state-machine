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

module.exports = His;
