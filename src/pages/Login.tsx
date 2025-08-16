import { Button, Row } from 'antd';
import { useLoginMutation } from '../redux/features/auth/authApi';
import { useAppDispatch } from '../redux/hooks';
import { setUser, type TUser } from '../redux/features/auth/authSlice';
import { verifyToken } from '../utils/vertifyToken';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { FormComponent } from '../components/form/FormComponent';
import InputComponent from '../components/form/InputComponent';
import type { FieldValues } from 'react-hook-form';

const Login = () => {
  const nagivate = useNavigate();
  const dispatch = useAppDispatch();

  const defaultValues = {
    id:'A-0002',
    password:'admin123'
  }

  const [login] = useLoginMutation();

  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    const toastId = toast.loading('Loggin In');
    try {
      const userInfo = {
        id: data?.id,
        password: data?.password,
      };
      const res = await login(userInfo).unwrap();
      const user = verifyToken(res?.data?.accessToken) as TUser;
      dispatch(
        setUser({
          user,
          token: res?.data?.accessToken,
        })
      );
      toast.success('Loggin Success', { id: toastId, duration: 2000 });

      nagivate(`/${user?.role}/dashboard`);
    } catch (error) {
      toast.error('Something went wrong', { id: toastId, duration: 2000 });
    }
  };

  return (
    <Row justify="center" align="middle" style={{ height: '100vh' }}>
      <FormComponent onSubmit={onSubmit} defaultValues={defaultValues}>
        <InputComponent type="text" name="id" label="ID: " />

        <InputComponent type="password" name="password" label="Password: " />
        <Button htmlType="submit">Submit</Button>
      </FormComponent>
    </Row>
  );
};

export default Login;
