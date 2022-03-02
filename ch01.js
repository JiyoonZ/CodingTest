var obj1 = {c: 10, d:'ddd'};
var obj2 = obj1;

console.log('참조형복사:',obj1, obj2);

obj2.c = 20;
console.log(obj1, obj2);

obj2 = {c: 30, d:'ddd'}; //변수 d는 기존의값과 동일하지만 하드코딩한격 
console.log(obj1, obj2);
console.log('=======================================================')


//얕은복사

// 이름을 변경하는 함수
// 협업하는 모든개발자들이 내부의 변경 필요시 copyObject함수를 사용하기로 합의하고 지킨다는 전제하에
// 불변객체라고 볼수있지만, 현실적으로 불가능 
var copyObject = function(target) {
  var result = {};
  for(var prop in target) {
    // console.log(target[prop]); //name의 값과 gender의 값 
    result[prop] = target[prop];
  }
  return result
};

//기존 user
var user = {
  name: 'Jaenam',
  gender: 'male',
  email: {main: 'abc@gmail', sub: 'def@naver', last: 'ghi@kakao'}
};

// 기존의 것과 별개의 user
var user2 = copyObject(user);
user2.name = 'Jung';
console.log('이름변경후:', user.name, user2.name); //user2값만 변경

if (user !== user2) {
  console.log('유저정보가 변경되었습니다.');
}
console.log(user.name, user2.name);
console.log(user === user2);



console.log('=====================얕은복사=============================')
user2.gender = 'female';
console.log('성별변경후: ', user.gender, user2.gender); //user2값만 변경
user2.email.main = 'abc@gamil.com';
console.log('user2이메일-main주소 변경: ', user.email.main, user2.email.main); 
//user와 user2모두 같은값으로 변경됨 -> 얕은복사를했기때문에

//위에서의 메일주소값 변경시 해결법 
user2.email = copyObject(user.email);
user2.email.main = 'def@gmail.com';
console.log(user.email.main, user2.email.main); //서로 다른값으로 나온다.

// 깊은 복사
var copyObjectDeep = function(target) {
  var result = {};
  if(typeof target === 'object' && target !== null) {
    for (var prop in target) {
      result[prop] = copyObjectDeep(target[prop]);
      //재귀호출 -> 내부데이터가 객체데이터라면 한번더 호출해서 복사하기
    }
  } else {
    result = target;
  }
  return result;
}
var user3 = copyObject(user);
console.log('=====================깊은복사=============================')
user3.gender = 'female';
console.log('성별변경후: ', user.gender, user3.gender); //user2값만 변경
user3.email.main = 'abc@gamil.com';
console.log('user2이메일-main주소 변경: ', user.email.main, user3.email.main); 
//user와 user2모두 같은값으로 변경됨 -> 얕은복사를했기때문에






