const hello = (req: any, res: any) => {
  res.status(200).json({ text: "Hello" });
};

export default hello;
