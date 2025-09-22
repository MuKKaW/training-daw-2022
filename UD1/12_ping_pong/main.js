function pingPong() {

    let pingHit = 5
    let pongHit = 10
    for (let i = 1; i <= 100; i++) {
        if(i === pingHit)
        {
            console.log('PING');
            pingHit += 10;
        }
        else if( i === pongHit){
            console.log('PONG');
            pongHit += 10;
        }
        else{
            console.log(i);
            
        }

    }

}

pingPong()
// expected output
// 1
// 2
// 3
// 4
// 5 PING
// 6
// 7
// 8
// 9
// 10 PONG
// 11
// 12
// 13
// 14
// 15 PING
// 16
// 17
// 18
// 19
// 20 PONG