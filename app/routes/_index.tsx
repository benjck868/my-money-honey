import type { MetaFunction } from "@remix-run/node";
import { useRouteError } from "@remix-run/react";
import { isErrorResponse } from "@remix-run/react/dist/data";

export const meta: MetaFunction = () => {
  return [
    { title: "honey money" },
    { name: "description", content: "welcome to your expense tracker" },
  ];
};

export default function Index() {
  return (
    <div>Index Home</div>
  );
}

export function ErrorBoundary(){
  const error = useRouteError()
  if(isErrorResponse(error)){
    return(
      <div>{JSON.stringify(error)}</div>
    )
  }
}
