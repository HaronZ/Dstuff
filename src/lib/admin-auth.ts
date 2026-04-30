import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function requireAdmin() {
  const cookieStore = await cookies();
  const token = cookieStore.get("admin_auth")?.value;
  if (token !== process.env.ADMIN_PASSWORD) {
    redirect("/admin");
  }
}
