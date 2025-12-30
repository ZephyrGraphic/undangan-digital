import BottomNav from "@/components/layout/BottomNav";

export default function GuestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="pb-20 max-w-md mx-auto bg-background-light dark:bg-background-dark min-h-screen shadow-2xl overflow-hidden">
        {children}
      </main>
      <BottomNav />
    </>
  );
}
