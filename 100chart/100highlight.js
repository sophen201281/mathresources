let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'C':
                display.innerText = '';
                break;
            case '=':
                try{
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = "Error"
                }
                break;
            case '←':
                if (display.innerText){
                   display.innerText = display.innerText.slice(0, -1);
                }
                break;
            default:
                display.innerText += e.target.innerText;
        }
    });
}); 


1
const button1 = document.getElementById('button1');

let index1 = 0;

const colors1 = [ 'yellow',''];

button1.addEventListener('click', function onClick() {
  button1.style.backgroundColor = colors1[index1];
  button1.style.color = 'blue';

  index1 = index1 >= colors1.length - 1 ? 0 : index1 + 1;
});
2
const button2 = document.getElementById('button2');

let index2 = 0;

const colors2 = [ 'yellow',''];

button2.addEventListener('click', function onClick() {
  button2.style.backgroundColor = colors2[index2];
  button2.style.color = 'Blue';

  index2 = index2 >= colors2.length - 1 ? 0 : index2 + 1;
});
3
const button3 = document.getElementById('button3');

let index3 = 0;

const colors3 = ['yellow',''];

button3.addEventListener('click', function onClick() {
  button3.style.backgroundColor = colors3[index3];
  button3.style.color = 'Blue';

  index3 = index3 >= colors3.length - 1 ? 0 : index3 + 1;
});
4
const button4 = document.getElementById('button4');

let index4 = 0;

const colors4 = [ 'yellow',''];

button4.addEventListener('click', function onClick() {
  button4.style.backgroundColor = colors4[index4];
  button4.style.color = 'Blue';

  index4 = index4 >= colors4.length - 1 ? 0 : index4 + 1;
});
5
const button5 = document.getElementById('button5');

let index5 = 0;

const colors5 = [ 'yellow',''];

button5.addEventListener('click', function onClick() {
  button5.style.backgroundColor = colors5[index5];
  button5.style.color = 'Blue';

  index5 = index5 >= colors5.length - 1 ? 0 : index5 + 1;
});
6
const button6 = document.getElementById('button6');

let index6 = 0;

const colors6 = [ 'yellow',''];

button6.addEventListener('click', function onClick() {
  button6.style.backgroundColor = colors6[index6];
  button6.style.color = 'Blue';

  index6 = index6 >= colors6.length - 1 ? 0 : index6 + 1;
});

7
const button7 = document.getElementById('button7');

let index7 = 0;

const colors7 = ['yellow',''];

button7.addEventListener('click', function onClick() {
  button7.style.backgroundColor = colors7[index7];
  button7.style.color = 'Blue';

  index7 = index7 >= colors7.length - 1 ? 0 : index7 + 1;
});

8
const button8 = document.getElementById('button8');

let index8 = 0;

const colors8 = ['yellow',''];

button8.addEventListener('click', function onClick() {
  button8.style.backgroundColor = colors8[index8];
  button8.style.color = 'Blue';

  index8 = index8 >= colors8.length - 1 ? 0 : index8 + 1;
});

9
const button9 = document.getElementById('button9');

let index9 = 0;

const colors9 = [ 'yellow',''];

button9.addEventListener('click', function onClick() {
  button9.style.backgroundColor = colors9[index9];
  button9.style.color = 'Blue';

  index9 = index9 >= colors9.length - 1 ? 0 : index9 + 1;
});

10
const button10 = document.getElementById('button10');

let index10 = 0;

const colors10 = [ 'yellow',''];

button10.addEventListener('click', function onClick() {
  button10.style.backgroundColor = colors10[index10];
  button10.style.color = 'Blue';

  index10 = index10 >= colors10.length - 1 ? 0 : index10 + 1;
});

11
const button11 = document.getElementById('button11');

let index11 = 0;

const colors11 = [ 'yellow',''];

button11.addEventListener('click', function onClick() {
  button11.style.backgroundColor = colors11[index11];
  button11.style.color = 'Blue';

  index11 = index11 >= colors11.length - 1 ? 0 : index11 + 1;
});

12
const button12 = document.getElementById('button12');

let index12 = 0;

const colors12 = [ 'yellow',''];

button12.addEventListener('click', function onClick() {
  button12.style.backgroundColor = colors12[index12];
  button12.style.color = 'Blue';

  index12 = index12 >= colors12.length - 1 ? 0 : index12 + 1;
});

13
const button13 = document.getElementById('button13');

let index13 = 0;

const colors13 = [ 'yellow',''];

button13.addEventListener('click', function onClick() {
  button13.style.backgroundColor = colors13[index13];
  button13.style.color = 'Blue';

  index13 = index13 >= colors13.length - 1 ? 0 : index13 + 1;
});

14
const button14 = document.getElementById('button14');

let index14 = 0;

const colors14 = [ 'yellow',''];

button14.addEventListener('click', function onClick() {
  button14.style.backgroundColor = colors14[index14];
  button14.style.color = 'Blue';

  index14 = index14 >= colors14.length - 1 ? 0 : index14 + 1;
});

15
const button15 = document.getElementById('button15');

let index15 = 0;

const colors15 = [ 'yellow',''];

button15.addEventListener('click', function onClick() {
  button15.style.backgroundColor = colors15[index15];
  button15.style.color = 'Blue';

  index15 = index15 >= colors15.length - 1 ? 0 : index15 + 1;
});

16
const button16 = document.getElementById('button16');

let index16 = 0;

const colors16 = [ 'yellow',''];

button16.addEventListener('click', function onClick() {
  button16.style.backgroundColor = colors16[index16];
  button16.style.color = 'Blue';

  index16 = index16 >= colors16.length - 1 ? 0 : index16 + 1;
});

17
const button17 = document.getElementById('button17');

let index17 = 0;

const colors17 = [ 'yellow',''];

button17.addEventListener('click', function onClick() {
  button17.style.backgroundColor = colors17[index17];
  button17.style.color = 'Blue';

  index17 = index17 >= colors17.length - 1 ? 0 : index17 + 1;
});

18
const button18 = document.getElementById('button18');

let index18 = 0;

const colors18 = [ 'yellow',''];

button18.addEventListener('click', function onClick() {
  button18.style.backgroundColor = colors18[index18];
  button18.style.color = 'Blue';

  index18 = index18 >= colors18.length - 1 ? 0 : index18 + 1;
});

19
const button19 = document.getElementById('button19');

let index19 = 0;

const colors19 = [ 'yellow',''];

button19.addEventListener('click', function onClick() {
  button19.style.backgroundColor = colors19[index19];
  button19.style.color = 'Blue';

  index19 = index19 >= colors19.length - 1 ? 0 : index19 + 1;
});

20
const button20 = document.getElementById('button20');

let index20 = 0;

const colors20 = [ 'yellow',''];

button20.addEventListener('click', function onClick() {
  button20.style.backgroundColor = colors20[index20];
  button20.style.color = 'Blue';

  index20 = index20 >= colors20.length - 1 ? 0 : index20 + 1;
});

21
const button21 = document.getElementById('button21');

let index21 = 0;

const colors21 = [ 'yellow',''];

button21.addEventListener('click', function onClick() {
  button21.style.backgroundColor = colors21[index21];
  button21.style.color = 'Blue';

  index21 = index21 >= colors21.length - 1 ? 0 : index21 + 1;
});

22
const button22 = document.getElementById('button22');

let index22 = 0;

const colors22 = [ 'yellow',''];

button22.addEventListener('click', function onClick() {
  button22.style.backgroundColor = colors22[index22];
  button22.style.color = 'Blue';

  index22 = index22 >= colors22.length - 1 ? 0 : index22 + 1;
});

23
const button23 = document.getElementById('button23');

let index23 = 0;

const colors23 = [ 'yellow',''];

button23.addEventListener('click', function onClick() {
  button23.style.backgroundColor = colors23[index23];
  button23.style.color = 'Blue';

  index23 = index23 >= colors23.length - 1 ? 0 : index23 + 1;
});

24
const button24 = document.getElementById('button24');

let index24 = 0;

const colors24 = [ 'yellow',''];

button24.addEventListener('click', function onClick() {
  button24.style.backgroundColor = colors24[index24];
  button24.style.color = 'Blue';

  index24 = index24 >= colors24.length - 1 ? 0 : index24 + 1;
});

25
const button25 = document.getElementById('button25');

let index25 = 0;

const colors25 = [ 'yellow',''];

button25.addEventListener('click', function onClick() {
  button25.style.backgroundColor = colors25[index25];
  button25.style.color = 'Blue';

  index25 = index25 >= colors25.length - 1 ? 0 : index25 + 1;
});

26
const button26 = document.getElementById('button26');

let index26 = 0;

const colors26 = [ 'yellow',''];

button26.addEventListener('click', function onClick() {
  button26.style.backgroundColor = colors26[index26];
  button26.style.color = 'Blue';

  index26 = index26 >= colors26.length - 1 ? 0 : index26 + 1;
});

27
const button27 = document.getElementById('button27');

let index27 = 0;

const colors27 = ['yellow',''];

button27.addEventListener('click', function onClick() {
  button27.style.backgroundColor = colors27[index27];
  button27.style.color = 'Blue';

  index27 = index27 >= colors27.length - 1 ? 0 : index27 + 1;
});

28
const button28 = document.getElementById('button28');

let index28 = 0;

const colors28 = [ 'yellow',''];

button28.addEventListener('click', function onClick() {
  button28.style.backgroundColor = colors28[index28];
  button28.style.color = 'Blue';

  index28 = index28 >= colors28.length - 1 ? 0 : index28 + 1;
});

29
const button29 = document.getElementById('button29');

let index29 = 0;

const colors29 = ['yellow',''];

button29.addEventListener('click', function onClick() {
  button29.style.backgroundColor = colors29[index29];
  button29.style.color = 'Blue';

  index29 = index29 >= colors29.length - 1 ? 0 : index29 + 1;
});

30
const button30 = document.getElementById('button30');

let index30 = 0;

const colors30 = [ 'yellow',''];

button30.addEventListener('click', function onClick() {
  button30.style.backgroundColor = colors30[index30];
  button30.style.color = 'Blue';

  index30 = index30 >= colors30.length - 1 ? 0 : index30 + 1;
});

31
const button31 = document.getElementById('button31');

let index31 = 0;

const colors31 = [ 'yellow',''];

button31.addEventListener('click', function onClick() {
  button31.style.backgroundColor = colors31[index31];
  button31.style.color = 'Blue';

  index31 = index31 >= colors31.length - 1 ? 0 : index31 + 1;
});

32
const button32 = document.getElementById('button32');

let index32 = 0;

const colors32 = [ 'yellow',''];

button32.addEventListener('click', function onClick() {
  button32.style.backgroundColor = colors32[index32];
  button32.style.color = 'Blue';

  index32 = index32 >= colors32.length - 1 ? 0 : index32 + 1;
});

33
const button33 = document.getElementById('button33');

let index33 = 0;

const colors33 = [ 'yellow',''];

button33.addEventListener('click', function onClick() {
  button33.style.backgroundColor = colors33[index33];
  button33.style.color = 'Blue';

  index33 = index33 >= colors33.length - 1 ? 0 : index33 + 1;
});

34
const button34 = document.getElementById('button34');

let index34 = 0;

const colors34 = [ 'yellow',''];

button34.addEventListener('click', function onClick() {
  button34.style.backgroundColor = colors34[index34];
  button34.style.color = 'Blue';

  index34 = index34 >= colors34.length - 1 ? 0 : index34 + 1;
});

35
const button35 = document.getElementById('button35');

let index35 = 0;

const colors35 = [ 'yellow',''];

button35.addEventListener('click', function onClick() {
  button35.style.backgroundColor = colors35[index35];
  button35.style.color = 'Blue';

  index35 = index35 >= colors35.length - 1 ? 0 : index35 + 1;
});

36
const button36 = document.getElementById('button36');

let index36 = 0;

const colors36 = [ 'yellow',''];

button36.addEventListener('click', function onClick() {
  button36.style.backgroundColor = colors36[index36];
  button36.style.color = 'Blue';

  index36 = index36 >= colors36.length - 1 ? 0 : index36 + 1;
});

37
const button37 = document.getElementById('button37');

let index37 = 0;

const colors37 = [ 'yellow',''];

button37.addEventListener('click', function onClick() {
  button37.style.backgroundColor = colors37[index37];
  button37.style.color = 'Blue';

  index37 = index37 >= colors37.length - 1 ? 0 : index37 + 1;
});

38
const button38 = document.getElementById('button38');

let index38 = 0;

const colors38 = [ 'yellow',''];

button38.addEventListener('click', function onClick() {
  button38.style.backgroundColor = colors38[index38];
  button38.style.color = 'Blue';

  index38 = index38 >= colors38.length - 1 ? 0 : index38 + 1;
});

39
const button39 = document.getElementById('button39');

let index39 = 0;

const colors39 = [ 'yellow',''];

button39.addEventListener('click', function onClick() {
  button39.style.backgroundColor = colors39[index39];
  button39.style.color = 'Blue';

  index39 = index39 >= colors39.length - 1 ? 0 : index39 + 1;
});

40
const button40 = document.getElementById('button40');

let index40 = 0;

const colors40 = [ 'yellow',''];

button40.addEventListener('click', function onClick() {
  button40.style.backgroundColor = colors40[index40];
  button40.style.color = 'Blue';

  index40 = index40 >= colors40.length - 1 ? 0 : index40 + 1;
});

41
const button41 = document.getElementById('button41');

let index41 = 0;

const colors41 = [ 'yellow',''];

button41.addEventListener('click', function onClick() {
  button41.style.backgroundColor = colors41[index41];
  button41.style.color = 'Blue';

  index41 = index41 >= colors41.length - 1 ? 0 : index41 + 1;
});

42
const button42 = document.getElementById('button42');

let index42 = 0;

const colors42 = [ 'yellow',''];

button42.addEventListener('click', function onClick() {
  button42.style.backgroundColor = colors42[index42];
  button42.style.color = 'Blue';

  index42 = index42 >= colors42.length - 1 ? 0 : index42 + 1;
});

43
const button43 = document.getElementById('button43');

let index43 = 0;

const colors43 = [ 'yellow',''];

button43.addEventListener('click', function onClick() {
  button43.style.backgroundColor = colors43[index43];
  button43.style.color = 'Blue';

  index43 = index43 >= colors43.length - 1 ? 0 : index43 + 1;
});

44
const button44 = document.getElementById('button44');

let index44 = 0;

const colors44 = [ 'yellow',''];

button44.addEventListener('click', function onClick() {
  button44.style.backgroundColor = colors44[index44];
  button44.style.color = 'Blue';

  index44 = index44 >= colors44.length - 1 ? 0 : index44 + 1;
});

45
const button45 = document.getElementById('button45');

let index45 = 0;

const colors45 = [ 'yellow',''];

button45.addEventListener('click', function onClick() {
  button45.style.backgroundColor = colors45[index45];
  button45.style.color = 'Blue';

  index45 = index45 >= colors45.length - 1 ? 0 : index45 + 1;
});

46
const button46 = document.getElementById('button46');

let index46 = 0;

const colors46 = ['yellow',''];

button46.addEventListener('click', function onClick() {
  button46.style.backgroundColor = colors46[index46];
  button46.style.color = 'Blue';

  index46 = index46 >= colors46.length - 1 ? 0 : index46 + 1;
});

47
const button47 = document.getElementById('button47');

let index47 = 0;

const colors47 = [ 'yellow',''];

button47.addEventListener('click', function onClick() {
  button47.style.backgroundColor = colors47[index47];
  button47.style.color = 'Blue';

  index47 = index47 >= colors47.length - 1 ? 0 : index47 + 1;
});

48
const button48 = document.getElementById('button48');

let index48 = 0;

const colors48 = [ 'yellow',''];

button48.addEventListener('click', function onClick() {
  button48.style.backgroundColor = colors48[index48];
  button48.style.color = 'Blue';

  index48 = index48 >= colors48.length - 1 ? 0 : index48 + 1;
});

49
const button49 = document.getElementById('button49');

let index49 = 0;

const colors49 = [ 'yellow',''];

button49.addEventListener('click', function onClick() {
  button49.style.backgroundColor = colors49[index49];
  button49.style.color = 'Blue';

  index49 = index49 >= colors49.length - 1 ? 0 : index49 + 1;
});

50
const button50 = document.getElementById('button50');

let index50 = 0;

const colors50 = [ 'yellow',''];

button50.addEventListener('click', function onClick() {
  button50.style.backgroundColor = colors50[index50];
  button50.style.color = 'Blue';

  index50 = index50 >= colors50.length - 1 ? 0 : index50 + 1;
});

51
const button51 = document.getElementById('button51');

let index51 = 0;

const colors51 = ['yellow',''];

button51.addEventListener('click', function onClick() {
  button51.style.backgroundColor = colors51[index51];
  button51.style.color = 'Blue';

  index51 = index51 >= colors51.length - 1 ? 0 : index51 + 1;
});


52
const button52 = document.getElementById('button52');

let index52 = 0;

const colors52 = [ 'yellow',''];

button52.addEventListener('click', function onClick() {
  button52.style.backgroundColor = colors52[index52];
  button52.style.color = 'Blue';

  index52 = index52 >= colors52.length - 1 ? 0 : index52 + 1;
});


53
const button53 = document.getElementById('button53');

let index53 = 0;

const colors53 = [ 'yellow',''];

button53.addEventListener('click', function onClick() {
  button53.style.backgroundColor = colors53[index53];
  button53.style.color = 'Blue';

  index53 = index53 >= colors53.length - 1 ? 0 : index53 + 1;
});


54
const button54 = document.getElementById('button54');

let index54 = 0;

const colors54 = [ 'yellow',''];

button54.addEventListener('click', function onClick() {
  button54.style.backgroundColor = colors54[index54];
  button54.style.color = 'Blue';

  index54 = index54 >= colors54.length - 1 ? 0 : index54 + 1;
});


55
const button55 = document.getElementById('button55');

let index55 = 0;

const colors55 = [ 'yellow',''];

button55.addEventListener('click', function onClick() {
  button55.style.backgroundColor = colors55[index55];
  button55.style.color = 'Blue';

  index55 = index55 >= colors55.length - 1 ? 0 : index55 + 1;
});


56
const button56 = document.getElementById('button56');

let index56 = 0;

const colors56 = [ 'yellow',''];

button56.addEventListener('click', function onClick() {
  button56.style.backgroundColor = colors56[index56];
  button56.style.color = 'Blue';

  index56 = index56 >= colors56.length - 1 ? 0 : index56 + 1;
});


57
const button57 = document.getElementById('button57');

let index57 = 0;

const colors57 = [ 'yellow',''];

button57.addEventListener('click', function onClick() {
  button57.style.backgroundColor = colors57[index57];
  button57.style.color = 'Blue';

  index57 = index57 >= colors57.length - 1 ? 0 : index57 + 1;
});


58
const button58 = document.getElementById('button58');

let index58 = 0;

const colors58 = [ 'yellow',''];

button58.addEventListener('click', function onClick() {
  button58.style.backgroundColor = colors58[index58];
  button58.style.color = 'Blue';

  index58 = index58 >= colors58.length - 1 ? 0 : index58 + 1;
});


59
const button59 = document.getElementById('button59');

let index59 = 0;

const colors59 = [ 'yellow',''];

button59.addEventListener('click', function onClick() {
  button59.style.backgroundColor = colors59[index59];
  button59.style.color = 'Blue';

  index59 = index59 >= colors59.length - 1 ? 0 : index59 + 1;
});


60
const button60 = document.getElementById('button60');

let index60 = 0;

const colors60 = [ 'yellow',''];

button60.addEventListener('click', function onClick() {
  button60.style.backgroundColor = colors60[index60];
  button60.style.color = 'Blue';

  index60 = index60 >= colors60.length - 1 ? 0 : index60 + 1;
});


61
const button61 = document.getElementById('button61');

let index61 = 0;

const colors61 = ['yellow',''];

button61.addEventListener('click', function onClick() {
  button61.style.backgroundColor = colors61[index61];
  button61.style.color = 'Blue';

  index61 = index61 >= colors61.length - 1 ? 0 : index61 + 1;
});


62
const button62 = document.getElementById('button62');

let index62 = 0;

const colors62 = [ 'yellow',''];

button62.addEventListener('click', function onClick() {
  button62.style.backgroundColor = colors62[index62];
  button62.style.color = 'Blue';

  index62 = index62 >= colors62.length - 1 ? 0 : index62 + 1;
});


63
const button63 = document.getElementById('button63');

let index63 = 0;

const colors63 = [ 'yellow',''];

button63.addEventListener('click', function onClick() {
  button63.style.backgroundColor = colors63[index63];
  button63.style.color = 'Blue';

  index63 = index63 >= colors63.length - 1 ? 0 : index63 + 1;
});


64
const button64 = document.getElementById('button64');

let index64 = 0;

const colors64 = [ 'yellow',''];

button64.addEventListener('click', function onClick() {
  button64.style.backgroundColor = colors64[index64];
  button64.style.color = 'Blue';

  index64 = index64 >= colors64.length - 1 ? 0 : index64 + 1;
});


65
const button65 = document.getElementById('button65');

let index65 = 0;

const colors65 = [ 'yellow',''];

button65.addEventListener('click', function onClick() {
  button65.style.backgroundColor = colors65[index65];
  button65.style.color = 'Blue';

  index65 = index65 >= colors65.length - 1 ? 0 : index65 + 1;
});


66
const button66 = document.getElementById('button66');

let index66 = 0;

const colors66 = [ 'yellow',''];

button66.addEventListener('click', function onClick() {
  button66.style.backgroundColor = colors66[index66];
  button66.style.color = 'Blue';

  index66 = index66 >= colors66.length - 1 ? 0 : index66 + 1;
});


67
const button67 = document.getElementById('button67');

let index67 = 0;

const colors67 = ['yellow',''];

button67.addEventListener('click', function onClick() {
  button67.style.backgroundColor = colors67[index67];
  button67.style.color = 'Blue';

  index67 = index67 >= colors67.length - 1 ? 0 : index67 + 1;
});


68
const button68 = document.getElementById('button68');

let index68 = 0;

const colors68 = [ 'yellow',''];

button68.addEventListener('click', function onClick() {
  button68.style.backgroundColor = colors68[index68];
  button68.style.color = 'Blue';

  index68 = index68 >= colors68.length - 1 ? 0 : index68 + 1;
});


69
const button69 = document.getElementById('button69');

let index69 = 0;

const colors69 = [ 'yellow',''];

button69.addEventListener('click', function onClick() {
  button69.style.backgroundColor = colors69[index69];
  button69.style.color = 'Blue';

  index69 = index69 >= colors69.length - 1 ? 0 : index69 + 1;
});


70
const button70 = document.getElementById('button70');

let index70 = 0;

const colors70 = [ 'yellow',''];

button70.addEventListener('click', function onClick() {
  button70.style.backgroundColor = colors70[index70];
  button70.style.color = 'Blue';

  index70 = index70 >= colors70.length - 1 ? 0 : index70 + 1;
});


71
const button71 = document.getElementById('button71');

let index71 = 0;

const colors71 = [ 'yellow',''];

button71.addEventListener('click', function onClick() {
  button71.style.backgroundColor = colors71[index71];
  button71.style.color = 'Blue';

  index71 = index71 >= colors71.length - 1 ? 0 : index71 + 1;
});


72
const button72 = document.getElementById('button72');

let index72 = 0;

const colors72 = [ 'yellow',''];

button72.addEventListener('click', function onClick() {
  button72.style.backgroundColor = colors72[index72];
  button72.style.color = 'Blue';

  index72 = index72 >= colors72.length - 1 ? 0 : index72 + 1;
});


73
const button73 = document.getElementById('button73');

let index73 = 0;

const colors73 = ['yellow',''];

button73.addEventListener('click', function onClick() {
  button73.style.backgroundColor = colors73[index73];
  button73.style.color = 'Blue';

  index73 = index73 >= colors73.length - 1 ? 0 : index73 + 1;
});


74
const button74 = document.getElementById('button74');

let index74 = 0;

const colors74 = [ 'yellow',''];

button74.addEventListener('click', function onClick() {
  button74.style.backgroundColor = colors74[index74];
  button74.style.color = 'Blue';

  index74 = index74 >= colors74.length - 1 ? 0 : index74 + 1;
});


75
const button75 = document.getElementById('button75');

let index75 = 0;

const colors75 = [ 'yellow',''];

button75.addEventListener('click', function onClick() {
  button75.style.backgroundColor = colors75[index75];
  button75.style.color = 'Blue';

  index75 = index75 >= colors75.length - 1 ? 0 : index75 + 1;
});


76
const button76 = document.getElementById('button76');

let index76 = 0;

const colors76 = ['yellow',''];

button76.addEventListener('click', function onClick() {
  button76.style.backgroundColor = colors76[index76];
  button76.style.color = 'Blue';

  index76 = index76 >= colors76.length - 1 ? 0 : index76 + 1;
});


77
const button77 = document.getElementById('button77');

let index77 = 0;

const colors77 = [ 'yellow',''];

button77.addEventListener('click', function onClick() {
  button77.style.backgroundColor = colors77[index77];
  button77.style.color = 'Blue';

  index77 = index77 >= colors77.length - 1 ? 0 : index77 + 1;
});


78
const button78 = document.getElementById('button78');

let index78 = 0;

const colors78 = ['yellow',''];

button78.addEventListener('click', function onClick() {
  button78.style.backgroundColor = colors78[index78];
  button78.style.color = 'Blue';

  index78 = index78 >= colors78.length - 1 ? 0 : index78 + 1;
});


79
const button79 = document.getElementById('button79');

let index79 = 0;

const colors79 = [ 'yellow',''];

button79.addEventListener('click', function onClick() {
  button79.style.backgroundColor = colors79[index79];
  button79.style.color = 'Blue';

  index79 = index79 >= colors79.length - 1 ? 0 : index79 + 1;
});


80
const button80 = document.getElementById('button80');

let index80 = 0;

const colors80 = [ 'yellow',''];

button80.addEventListener('click', function onClick() {
  button80.style.backgroundColor = colors80[index80];
  button80.style.color = 'Blue';

  index80 = index80 >= colors80.length - 1 ? 0 : index80 + 1;
});


81
const button81 = document.getElementById('button81');

let index81 = 0;

const colors81 = [ 'yellow',''];

button81.addEventListener('click', function onClick() {
  button81.style.backgroundColor = colors81[index81];
  button81.style.color = 'Blue';

  index81 = index81 >= colors81.length - 1 ? 0 : index81 + 1;
});


82
const button82 = document.getElementById('button82');

let index82 = 0;

const colors82 = [ 'yellow',''];

button82.addEventListener('click', function onClick() {
  button82.style.backgroundColor = colors82[index82];
  button82.style.color = 'Blue';

  index82 = index82 >= colors82.length - 1 ? 0 : index82 + 1;
});


83
const button83 = document.getElementById('button83');

let index83 = 0;

const colors83 = [ 'yellow',''];

button83.addEventListener('click', function onClick() {
  button83.style.backgroundColor = colors83[index83];
  button83.style.color = 'Blue';

  index83 = index83 >= colors83.length - 1 ? 0 : index83 + 1;
});


84
const button84 = document.getElementById('button84');

let index84 = 0;

const colors84 = [ 'yellow',''];

button84.addEventListener('click', function onClick() {
  button84.style.backgroundColor = colors84[index84];
  button84.style.color = 'Blue';

  index84 = index84 >= colors84.length - 1 ? 0 : index84 + 1;
});


85
const button85 = document.getElementById('button85');

let index85 = 0;

const colors85 = [ 'yellow',''];

button85.addEventListener('click', function onClick() {
  button85.style.backgroundColor = colors85[index85];
  button85.style.color = 'Blue';

  index85 = index85 >= colors85.length - 1 ? 0 : index85 + 1;
});


86
const button86 = document.getElementById('button86');

let index86 = 0;

const colors86 = [ 'yellow',''];

button86.addEventListener('click', function onClick() {
  button86.style.backgroundColor = colors86[index86];
  button86.style.color = 'Blue';

  index86 = index86 >= colors86.length - 1 ? 0 : index86 + 1;
});


87
const button87 = document.getElementById('button87');

let index87 = 0;

const colors87 = ['yellow',''];

button87.addEventListener('click', function onClick() {
  button87.style.backgroundColor = colors87[index87];
  button87.style.color = 'Blue';

  index87 = index87 >= colors87.length - 1 ? 0 : index87 + 1;
});


88
const button88 = document.getElementById('button88');

let index88 = 0;

const colors88 = [ 'yellow',''];

button88.addEventListener('click', function onClick() {
  button88.style.backgroundColor = colors88[index88];
  button88.style.color = 'Blue';

  index88 = index88 >= colors88.length - 1 ? 0 : index88 + 1;
});


89
const button89 = document.getElementById('button89');

let index89 = 0;

const colors89 = [ 'yellow',''];

button89.addEventListener('click', function onClick() {
  button89.style.backgroundColor = colors89[index89];
  button89.style.color = 'Blue';

  index89 = index89 >= colors89.length - 1 ? 0 : index89 + 1;
});


90
const button90 = document.getElementById('button90');

let index90 = 0;

const colors90 = [ 'yellow',''];

button90.addEventListener('click', function onClick() {
  button90.style.backgroundColor = colors90[index90];
  button90.style.color = 'Blue';

  index90 = index90 >= colors90.length - 1 ? 0 : index90 + 1;
});


91
const button91 = document.getElementById('button91');

let index91 = 0;

const colors91 = ['yellow',''];

button91.addEventListener('click', function onClick() {
  button91.style.backgroundColor = colors91[index91];
  button91.style.color = 'Blue';

  index91 = index91 >= colors91.length - 1 ? 0 : index91 + 1;
});


92
const button92 = document.getElementById('button92');

let index92 = 0;

const colors92 = [ 'yellow',''];

button92.addEventListener('click', function onClick() {
  button92.style.backgroundColor = colors92[index92];
  button92.style.color = 'Blue';

  index92 = index92 >= colors92.length - 1 ? 0 : index92 + 1;
});


93
const button93 = document.getElementById('button93');

let index93 = 0;

const colors93 = ['yellow',''];

button93.addEventListener('click', function onClick() {
  button93.style.backgroundColor = colors93[index93];
  button93.style.color = 'Blue';

  index93 = index93 >= colors93.length - 1 ? 0 : index93 + 1;
});


94
const button94 = document.getElementById('button94');

let index94 = 0;

const colors94 = ['yellow',''];

button94.addEventListener('click', function onClick() {
  button94.style.backgroundColor = colors94[index94];
  button94.style.color = 'Blue';

  index94 = index94 >= colors94.length - 1 ? 0 : index94 + 1;
});


95
const button95 = document.getElementById('button95');

let index95 = 0;

const colors95 = [ 'yellow',''];

button95.addEventListener('click', function onClick() {
  button95.style.backgroundColor = colors95[index95];
  button95.style.color = 'Blue';

  index95 = index95 >= colors95.length - 1 ? 0 : index95 + 1;
});


96
const button96 = document.getElementById('button96');

let index96 = 0;

const colors96 = [ 'yellow',''];

button96.addEventListener('click', function onClick() {
  button96.style.backgroundColor = colors96[index96];
  button96.style.color = 'Blue';

  index96 = index96 >= colors96.length - 1 ? 0 : index96 + 1;
});


97
const button97 = document.getElementById('button97');

let index97 = 0;

const colors97 = ['yellow',''];

button97.addEventListener('click', function onClick() {
  button97.style.backgroundColor = colors97[index97];
  button97.style.color = 'Blue';

  index97 = index97 >= colors97.length - 1 ? 0 : index97 + 1;
});


98
const button98 = document.getElementById('button98');

let index98 = 0;

const colors98 = [ 'yellow',''];

button98.addEventListener('click', function onClick() {
  button98.style.backgroundColor = colors98[index98];
  button98.style.color = 'Blue';

  index98 = index98 >= colors98.length - 1 ? 0 : index98 + 1;
});


99
const button99 = document.getElementById('button99','button' );

let index99 = 0;

const colors99 = [ 'yellow',''];

button99.addEventListener('click', function onClick() {
  button99.style.backgroundColor = colors99[index99];
  button99.style.color = 'Blue';

  index99 = index99 >= colors99.length - 1 ? 0 : index99 + 1;
});


100
const button100 = document.getElementById('button100');

let index100 = 0;

const colors100 = ['yellow',''];

button100.addEventListener('click', function onClick() {
  button100.style.backgroundColor = colors100[index100];
  button100.style.color = 'Blue';

  index100 = index100 >= colors100.length - 1 ? 0 : index100 + 1;
});

var a = document.getElementById("myAudio1");

function playAudio1() {
  a.play();
}
var b = document.getElementById("myAudio2");

function playAudio2() {
  b.play();
}