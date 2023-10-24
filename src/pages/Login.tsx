import { useNavigate } from "react-router-dom";
import {
  Card,
  InputGroup,
  LoginCard,
  LoginForm,
  MainContainer,
  Welcome,
} from "../components/LoginStyles";
import { login } from "../config/services/auth.service";

function Login() {
  const navigate = useNavigate();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const user = {
      emailOrUsername: e.currentTarget.username.value,
      password: e.currentTarget.password.value,
    };

    console.log(user);

    const response = await login(user);

    // console.log(login(user));

    console.log(response);

    if (!response || response.code !== 200) {
      alert("Username ou senha incorretos.");
      return;
    }

    if (response.code === 200) {
      localStorage.setItem("token", response.data.token);
      navigate("/home");
    }
  }

  return (
    <>
      <MainContainer>
        <LoginCard>
          <Welcome>
            <h1>Growtwitter</h1>
            <p id="trabalho">Trabalho final do bloco intermediário</p>
            <p>
              O Growtwitter é a plataforma definitiva para todos os apaixonados
              por redes sociais que buscam uma experiência familiar e poderosa,
              semelhante ao Twitter, mas com um toque único. Seja parte desta
              comunidade que valoriza a liberdade de expressão, a conexão com
              pessoas de todo o mundo e a disseminação de ideias.
            </p>
          </Welcome>

          <LoginForm>
            <Card>
              <h2>Entrar no Growtwitter</h2>
              <form onSubmit={(e) => handleSubmit(e)}>
                <InputGroup>
                  <label htmlFor="username">Username</label>
                  <input type="text" name="username" />
                </InputGroup>
                <InputGroup>
                  <label htmlFor="password">Senha</label>
                  <input type="password" name="password" />
                </InputGroup>
                <InputGroup>
                  <button type="submit">Entrar</button>
                </InputGroup>
              </form>
            </Card>
          </LoginForm>
        </LoginCard>
      </MainContainer>
    </>
  );
}

export default Login;
