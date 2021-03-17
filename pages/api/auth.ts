import withSession from "../../lib/session";

const auth = async (user: string, password: string) =>
  await fetch("http://localhost:3000/api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      user,
      password,
    }),
  });

export default withSession(async (req: any, res: any) => {
  const { user: username, password } = await req.body;
  try {
    const response = await auth(username, password);
    if (response.ok) {
      const user = { isLoggedIn: true, username };
      req.session.set("user", user);
      await req.session.save();
      res.status(response.status);
      res.json({ user: username, password });
    } else {
      res.status(response.status);
      const resBody = await response.json();
      res.json(resBody);
    }
  } catch (error) {
    const { response: fetchResponse } = error;
    res.status(fetchResponse?.status || 401).json(error.data);
  }
});
