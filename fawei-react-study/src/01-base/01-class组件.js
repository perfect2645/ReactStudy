// class Test {
//     constructor() {
//         this.a = 1;
//     }

//     testa() {
//         console.log("test a");
//     }

//     testb() {

//     }
// }

// class Test2 extends Test {
//     testb() {
//         this.a = 5;
//     }
// }

// var obj = new Test2();
// obj.testa();
// console.log(obj.a);
// obj.testb();
// console.log(obj.a);

import React from 'react'

class App extends React.Component {

    render = () => {
        return <div>hello react</div>;
    }
}

export default App