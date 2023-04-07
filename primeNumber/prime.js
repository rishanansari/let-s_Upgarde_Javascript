//write a program to find a prime number between 2 to 50.

let counter =0;// 2 possibilities to get number prime (divide by 1 and self number)
let i,j;

for(j=2;j<=50;j++){
// j is for the range of number to be iterate
    for(i=1;i<=j;i++){
        //i is for the division which continue till j only.
        if(j%i==0)
        counter++;
        //counter is for flag.
    }
    if(counter==2)
    console.log(j);
    //j loop print the value which will prime
    counter = 0;
    // again cotner should be start from 0
}
