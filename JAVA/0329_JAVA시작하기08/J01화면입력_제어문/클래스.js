(()=>{
     class Kurly{
        init(){
            this.section1();
        }
        section1(){
            console.log('section1 method');
        }
        nextLine(){

        }
        next(){
            console.log('일반');
        }
        nextInt(){
            console.log('정수');
        }
        nextDouble(){
            console.log('실수');
        }
     }
     //클래스는 함수이다!!!!!!
      const kurly = new Kurly();

      kurly.init();
      kurly.nextLine();
      kurly.next();
      kurly.nextInt();
      kurly.nextDouble();

})();