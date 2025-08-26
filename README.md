# Toy Project (리드미 작성중)

>여러 최신 스택들을 활용하여 토이 프로젝트를 구현하였습니다. 
나의 할 일 / 인스타그램 클론 / 넷플릭스 클론 / 파일 업로드 기능을 담고 있으며,
모바일 웹 환경을 고려하여 작업하였습니다.


<br>

### 사용된 기술
`Next.js` `Typescript` `Jotai` `React-query` `Emotion` `Supabase`
- App Router 기반으로 라우팅이 자동화 되어있다는 점과 SSR 및 CSR 을 분리하여 적용할 수 있다는 점, 그리고 API Routes 를 통해 간단한 서버 API 를 바로 생성할 수 있다는 점에서 Next.js 를 사용하게 되었습니다.
- 간단한 중앙데이터 관리를 위해 Recoil 을 사용하려 하였으나, 개발자 지원 중단 및 React 18 버전과의 이슈 등으로 인해 그와 매우 유사한 구조를 가진 Jotai 를 사용하였습니다.
- 데이터 패칭과 인피니트 스크롤링에 있어 가장 최적화된 라이브러리인 React-query 를 사용하였습니다.
- 간단한 CRUD 의 백엔드 환경을 조성하기 위해 supabase 를 활용하였습니다. 
firebase 와 유사하지만 SQL 기반인 점과 그 외 더 좋은 성능으로 디벨롭된 버전이 supabase 라는 점에서 추후 사용 가능성을 염두에 두어 사용하게되었습니다.


<br>

## 1. 나의 할 일(Todo-list)
>가장 기초적인 CRUD 를 구현하기에 적합한 투두리스트를 구현하였습니다. [링크](https://hyejin-toy-project.vercel.app/todo)

<img width="1358" height="619" alt="image" src="https://github.com/user-attachments/assets/90ea9a76-a838-4c69-ae36-729e526d3e33" />

<br>
<br>

### 주요 기능

- 할 일 등록/수정/삭제 기능
- 할 일 여부 체크 기능
- 이미 체크된 할 일의 경우 아래로 정렬, 할 일 생성일 기준으로 오름차순 정렬 되도록 구현
  
  <img width="1051" height="303" alt="image" src="https://github.com/user-attachments/assets/c9243881-f828-4412-87da-c0c13f8ddd3f" />


  ```
    export async function getTodos({ searchInput = '' }): Promise<TodoRow[]> {
      const supabase = await createServerSupabaseClient();
      const { data, error } = await supabase
        .from('todo')
        .select('*')
        .like('title', `%${searchInput}%`)
        .order('completed', { ascending: true }) // completed false 를 위로, true 를 아래로 정렬
        .order('created_at', { ascending: true }); // 각 그룹 내에서 생성일 기준 오름차순 정렬
    
      if (error) handleError(error);
      return data;
    }
  ```
- 마감일도 있으면 좋겠다는 생각으로 DatePicker 라는 라이브러리를 사용, 따로 다른 페이지에서도 사용하기 유용하게 커스텀 컴포넌트로 제작
  <img width="405" height="369" alt="image" src="https://github.com/user-attachments/assets/a2e3fb25-8fb0-41ab-ae57-eb5992f36e5e" />


    ```
    <S.TodoListItemWrapDate>
      <S.TodoListItemWrapText>⏰ 마감일:</S.TodoListItemWrapText>{' '}
      <CustomDatePicker
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        disabled={updateTodoMutation.isPending || !isEdit}
      />
    </S.TodoListItemWrapDate>
    ```
      
    ```
    import DatePicker from 'react-datepicker';
    import 'react-datepicker/dist/react-datepicker.css';
    import * as S from './styled';
    
    interface CustomDatePickerProps {
      selectedDate: Date | null;
      setSelectedDate: (date: Date | null) => void;
      disabled?: boolean;
    }
    
    const CustomDatePicker = ({
      selectedDate,
      setSelectedDate,
      disabled = false,
    }: CustomDatePickerProps) => {
      return (
        <S.DatePickerWrapper $disabled={disabled}>
          <DatePicker
            dateFormat='yyyy.MM.dd'
            shouldCloseOnSelect
            minDate={new Date()}
            selected={selectedDate}
            onChange={(date: Date | null) => setSelectedDate(date)}
            placeholderText='기한 없음'
            disabled={disabled}
          />
        </S.DatePickerWrapper>
      );
    };
    
    export default CustomDatePicker;
    
    ```
- 새로 생성된 할 일인 경우 자동으로 편집 모드 구현
  <img width="1032" height="105" alt="image" src="https://github.com/user-attachments/assets/4eb80f9c-a76f-4574-9081-a4bc2636135c" />

<br>

---

## 2. 인스타그램 클론 (J-Stagram)

>로그인 구현 및 사용자 정보 확인, 회원끼리 실시간 채팅을 할 수 있는 기능을 구현하였습니다. [링크](https://hyejin-toy-project.vercel.app/j-stagram)

<img width="925" height="496" alt="image" src="https://github.com/user-attachments/assets/346fb9e9-ddf8-4a48-af23-91b23299a09c" />


<br>
<br>

### 주요 기능

- Supabase Auth 를 활용하여 일반 로그인 및 카카오 소셜 로그인 기능 구현
  - 일반 로그인의 경우 OTP 번호를 받아 인증하는 방식으로 진행
    

  - 카카오 로그인
    <img width="734" height="456" alt="image" src="https://github.com/user-attachments/assets/bd90be3f-eade-4aa0-8799-1eec0e11208b" />


- Supabase 의 RealTime 기능을 활용하여 가입된 상대방과 실시간으로 채팅할 수 있도록 구현
  ![Image](https://github.com/user-attachments/assets/c0cefed7-2a1a-44a0-b4f6-b1d26c8a4116)

---


## 문제 해결 및 성능 개선

1. 나의 할 일
   - 등록/수정/삭제가 되는 동안 버튼을 누르면 중복 요청이 발생되어, 요청이 완료되지 않을 시 버튼 기능 disabled 처리 (+로딩중 로띠를 활용하여 UX 처리)

2. 인스타그램 클론

---

## 프로젝트 의의
로컬스토리지를 이용하여 todo-list 를 구현하였는데, 이는 처음으로 CRUD 의 개념을 잡기 아주 좋은 경험이었습니다. 또한 스크립트로 그래픽을 표현하는 canvas 를 사용한 점이나, 계산기를 구현한 것은 일상생활 속에서 사용되는 기능을 직접 만들어보았다는 점에서 뜻 깊은 의의가 있었습니다. 나머지 부가기능에서 외부 API 를 가져와 적용하는 날씨 기능 역시 새로운 경험을 가져다 주었습니다.
