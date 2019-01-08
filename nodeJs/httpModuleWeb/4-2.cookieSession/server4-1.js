const http = require('http');
const fs = require('fs');
const url = require('url');
const qs = require('querystring');

//cookie='' 기본 매개변수는 함수를 호출하면서 변경될수 있음 cookie는 변하는것이기 떄문에 cookie=''로 작성되어 있음
const parseCookies = (cookie = '')=>
    cookie
        .split(';')
        .map(v=>{
            console.log('v:'+v);
            console.log(`v.split('='):`+v.split('='));
            return v.split('=');
        })
        .map(([k, ...vs])=> {
            console.log('k : ' + k);
            console.log('vs : ' + vs);
            console.log('vs.join(\'=\') : ' + vs.join('='));
            console.log('[k, vs.join(\'=\')] : ' + [k, vs.join('=')]);

            return [k, vs.join('=')];
        })
        .reduce((acc,[k,v])=>{
            console.log('acc:'+acc);
            console.log('[k,v]:'+[k,v]);
            console.log('k.trim():'+k.trim());

            acc[k.trim()]=decodeURIComponent(v);
            console.log('acc[k.trim()] : '+acc[k.trim()])
            console.log(acc);
            return acc;
        },{});
    console.log(parseCookies('name=zerocho;year=1994'));
//{ name: 'zerocho', year: '1994' }
/* 출력 결과는 이런식으로 나옴
v : name=zerocho
v.split('=') : name,zerocho

v : year=1994
v.split('=') : year,1994

k : name
vs : zerocho
vs.join('=') : zerocho
[k, vs.join('=')] : name,zerocho

k : year
vs : 1994
vs.join('=') : 1994
[k, vs.join('=')] : year,1994

acc : [object Object]
[k, v] : name,zerocho
k.trim() : name
acc[k.trim()] : zerocho

acc : [object Object]
[k, v] : year,1994
k.trim() : year
acc[k.trim()] : 1994

{ name: 'zerocho', year: '1994' }
 */

 