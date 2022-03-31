---
title: '[Programing/Python] input VS sys.stdin.readline'
date: 2022-04-01 04:08:00 +0900
last_modified_at: 2022-04-01 04:08:00 +0900
categories:
  - Programing
tags:
  - Python
  - input
  - sys.stdin.readline
---

## input() 함수와 sys.stdin.readline() 함수의 차이점🧐

백준 사이트에서 문제를 풀던 중 주의해야 할 점을 보게 됐다.

본격적으로 for문 문제를 풀기 전에 주의해야 할 점이 있다. 입출력 방식이 느리면 여러 줄을 입력받거나 출력할 때 시간초과가 날 수 있다는 점이다.  
Python을 사용하고 있다면, input 대신 sys.stdin.readline을 사용할 수 있다. 단, 이때는 맨 끝의 개행문자까지 같이 입력받기 때문에 문자열을 저장하고 싶을 경우 .rstrip()을 추가로 해 주는 것이 좋다.
{: .notice--warning}

어떤 차이가 있는지 궁금해 찾아보게 됐다.🔍

> ### input() 함수

`input([prompt])` 형태로 사용하며, 파이썬 공식 문서의 설명이다.

prompt 인자가 있으면, 끝에 개행 문자를 붙이지 않고 표준 출력에 씁니다.  
그런 다음 함수는 입력에서 한 줄을 읽고, 문자열로 변환해서 (줄 끝의 줄 바꿈 문자를 제거한다) 돌려줍니다.
{: .notice--info}

위 내용을 간단하게 설명하면 아래와 같다.

prompt 출력 > 사용자 입력 > 문자열 변환 > 줄 바꿈 제거 > 반환
{: .notice--info}

prompt 인자를 넣으면 값을 입력하기 전에 prompt 출력을 확인할 수 있다.

값을 입력 후 출력하면 줄 바꿈이 없으며, `type`은 str 형인 것을 확인할 수 있다.

```python
>>> A = input('value : ')
value : 123
>>> print(A) 
123
>>> type(A)
<class 'str'>
```

> ### sys.stdin.readline() 함수

파이썬 공식 문서에서 `sys.stdin` 클래스와 `readline()` 함수의 설명이다.

#### sys.stdin

stdin는 모든 대화식 입력에 사용됩니다 (input() 호출을 포함합니다)
{: .notice--info}

`sys.stdin`의 타입을 확인하면 `io.TextIOWrapper` 클래스이다.

```python
>>> stdin = sys.stdin
>>> type(stdin) 
<class '_io.TextIOWrapper'>
```

#### readline([size])

`readline()` 함수는 공식 문서의 `io` 모듈 문서에서 찾을 수 있었다.

스트림에서 한 줄을 읽고 반환합니다. size가 지정되면, 최대 size 바이트를 읽습니다.  
줄 종결자는 바이너리 파일의 경우 항상 b'\n'입니다; 텍스트 파일의 경우, open()에 대한 newline 인자를 사용하여 인식되는 줄 종결자를 선택할 수 있습니다.
{: .notice--info}

`io` 모듈에 `IOBase`클래스가 최상위에 있고, 하위에 `TextIBBase` > `TextIOWrapper` 순으로 확장된다.

위 내용을 정리하면 `sys.stdin` 클래스가 대화식 입력으로 값을 전달하면 `readline()` 함수가 처리하게 되는 것이다.

값을 입력 후 출력하면 줄 바꿈이 있으며, `type`은 `input()` 함수와 같은 str 형이다.

```python
>>> stdin = sys.stdin.readline()
1234
>>> print(stdin)
1234

>>> type(stdin) 
<class 'str'>
>>># size를 입력한 Byte만큼만 입력받는다.
>>> stdin_size = sys.stdin.readline(2)
1234
>>># size를 입력할 때는 줄 바꿈이 발생하지 않는다.
>>> print(stdin_size) 
12
>>># 데이터 타입을 변경해도 줄 바꿈이 발생하지 않는다.
>>> stdin_int = int(sys.stdin.readline())  
1234
>>> print(stdin_int) 
1234
>>>
```

입력받은 문자열을 그대로 사용할 때는 줄 바꿈 제거가 필요하면 `rstrip()` 함수를 추가로 사용하면 된다.  
데이터 타입을 바꾸거나 `size`를 지정할 때는 사용하지 않아도 된다.
{: .notice--info}

> ### 차이점 ⚖️

| 함수 | prompt | 줄 바꿈 |
|:--------|:-------:|:--------:|
| input()              | 입력 | O |
| sys.stdin.readline() | X    | X |

> ### 결론 📌

input() 함수가 sys.stdin.readline() 함수에 비해 2개의 동작이 더 있어 반복문에서 사용할 때 성능이 떨어진다!

> ### 참고

input() : [https://docs.python.org/ko/3/library/functions.html](https://docs.python.org/ko/3/library/functions.html?highlight=input)

sys.stdin : [https://docs.python.org/ko/3/library/sys.html](https://docs.python.org/ko/3/library/sys.html?highlight=sys#module-sys)

readline() : [https://docs.python.org/ko/3/library/io.html](https://docs.python.org/ko/3/library/io.html?highlight=readline#io.IOBase.readline)