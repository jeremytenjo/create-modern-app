export type HelloWorldProps = {
  payload: {
    name: string
  }
}

export default async function helloWorld({ payload }: HelloWorldProps) {
  const result = { name: `hello my name is ${payload.name}` }

  return result
}
