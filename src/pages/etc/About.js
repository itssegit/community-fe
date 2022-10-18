/**
 * 
 * 쿼리 스트링 사용법 예시@returns 
 * 
 */

 import { useSearchParams } from 'react-router-dom';
 import { Stack, Button } from '@mui/material';

 const About = () => {
   const [searchParams, setSearchParams] = useSearchParams();
   const detail = searchParams.get('detail');
   const mode = searchParams.get('mode');
 
   const onToggleDetail = () => {
     setSearchParams({ mode, detail: detail === 'true' ? false : true });
   };
 
   const onIncreaseMode = () => {
     const nextMode = mode === null ? 1 : parseInt(mode) + 1;
     setSearchParams({ mode: nextMode, detail });
   };
 
   return (
     <div>
       <h1>일단 블로그를 만들어보려고 합니다.</h1>
       <h3>이 페이지는 또한 React Router Dom 쿼리 스트링 예시 페이지이기도 합니다.</h3>
       <p>Tech set : React, Spring boot, Docker, AWS etc</p>
       <p>detail: {detail}</p>
       <p>mode: {mode}</p>
       <Stack direction="row" spacing={1}>
          <Button variant="contained" onClick={onToggleDetail}>Toggle detail</Button>
          <Button variant="contained" color="info" onClick={onIncreaseMode}>mode + 1</Button>
       </Stack>
     </div>
   );
 };
 
 export default About;