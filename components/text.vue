<template>
    <div class="container max-w-[300px] flex justify-center items-center text-center">
      <h1>
        
        <span class="typed-text">{{ typeValue }}</span>
        <span class="blinking-cursor">|</span>
        <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
      </h1>
    </div>
  </template>
  
  <script>
  export default {
    name: "typeWiriter",
    data: () => {
      return {
        typeValue: "",
        typeStatus: false,
        displayTextArray: ["FOTOGRAFIAS", "PACKAGING", "EDITORIAL", "VIDEO", "MARCA", "ILUSTRACIONES"],
        typingSpeed: 100,
        erasingSpeed: 100,
        newTextDelay: 2000,
        displayTextArrayIndex: 0,
        charIndex: 0,
      };
    },
    props: {},
    created() {
      setTimeout(this.typeText, this.newTextDelay + 200);
    },
    methods: {
      typeText() {
        if (this.charIndex < this.displayTextArray[this.displayTextArrayIndex].length) {
          if (!this.typeStatus) this.typeStatus = true;
          this.typeValue += this.displayTextArray[this.displayTextArrayIndex].charAt(
            this.charIndex
          );
          this.charIndex += 1;
          setTimeout(this.typeText, this.typingSpeed);
        } else {
          this.typeStatus = false;
          setTimeout(this.eraseText, this.newTextDelay);
        }
      },
      eraseText() {
        if (this.charIndex > 0) {
          if (!this.typeStatus) this.typeStatus = true;
          this.typeValue = this.displayTextArray[this.displayTextArrayIndex].substring(
            0,
            this.charIndex - 1
          );
          this.charIndex -= 1;
          setTimeout(this.eraseText, this.erasingSpeed);
        } else {
          this.typeStatus = false;
          this.displayTextArrayIndex += 1;
          if (this.displayTextArrayIndex >= this.displayTextArray.length)
            this.displayTextArrayIndex = 0;
          setTimeout(this.typeText, this.typingSpeed + 1000);
        }
      },
    },
  };
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style lang="scss" scoped>
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;

    @media (max-width: 720px){


    }

  }
  h1 {
    font-size: 4rem;
    letter-spacing: -3px;
    font-stretch: normal;

    @media (max-width: 2000px){
        font-size: 3rem;
        letter-spacing: -2px;
        
        
    }

    @media (max-width: 720px){
        font-size: 2rem;
        letter-spacing: -1px;
        line-height: 1em;
        font-weight: normal;

    }

    @media (max-width: 510px){
        font-size: 2rem;
        letter-spacing: -1px;
        line-height: 1.75em;
        font-weight: normal;

    }
    
    font-weight: normal;
    span.typed-text {
      color: #6f6f6f;
    }
  }
  
  // Cursor blinking CSS Starts...
  .blinking-cursor {
    font-size: 6rem;
    color: #27272A;
    -webkit-animation: 1s blink step-end infinite;
    -moz-animation: 1s blink step-end infinite;
    -ms-animation: 1s blink step-end infinite;
    -o-animation: 1s blink step-end infinite;
    animation: 1s blink step-end infinite;

    @media (max-width: 2000px){
        font-size: 3rem;

    }
    @media (max-width: 720px){
        font-size: 2rem;

    }
  }
  @keyframes blink {
    from,
    to {
      color: transparent;
    }
    50% {
      color: #27272A;
    }
  }
  @-moz-keyframes blink {
    from,
    to {
      color: transparent;
    }
    50% {
      color: #27272A;
    }
  }
  @-webkit-keyframes blink {
    from,
    to {
      color: transparent;
    }
    50% {
      color: #27272A;
    }
  }
  @-ms-keyframes blink {
    from,
    to {
      color: transparent;
    }
    50% {
      color: #27272A;
    }
  }
  @-o-keyframes blink {
    from,
    to {
      color: transparent;
    }
    50% {
      color: #27272A;
    }
  }
  // Cursor blinking CSS Ends...
  </style>