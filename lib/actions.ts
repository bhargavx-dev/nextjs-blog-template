"use server";

export async function subscribeAction(preState: any, formData: FormData) {
  const email = formData.get("email");

  // simulate delay
  await new Promise((res) => setTimeout(res, 2000));


  return { success: true };
}

export async function contactSubmission(prevState: any, formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  //  // simulate delay
  await new Promise((res) => setTimeout(res, 2000));

  return { success: true };
}
