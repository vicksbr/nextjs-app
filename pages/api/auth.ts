import withSession from "../../lib/session";


// const isProd = process.env.NODE_ENV === "production"

// const auth = async (user: string, password: string, origin: string) =>
//   await fetch(`${isProd ? origin : ""}/api/login`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({
//       user,
//       password,
//     }),
//   });

export default withSession(async (req: any, res: any) => {

  const username = "fluxonaut da silva"


  try {
    const response = {ok: true, status: 200}
    if (response.ok) {
      const user = { isLoggedIn: true, username };
      req.session.set("user", user);
      await req.session.save();
      res.status(response.status);
      res.json({ user: username });
    } else {
      res.status(response.status);
      const resBody = {'message': 'deu rui'}
      res.json(resBody);
    }
  } catch (error) {
    const { response: fetchResponse } = error;
    res.status(fetchResponse?.status || 401).json(error.data);
  }
});
