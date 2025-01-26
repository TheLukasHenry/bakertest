import { Suspense } from "react"
import ProfileForm from "./components/profile-form"
import AddressBook from "./components/address-book"
import PreferenceCenter from "./components/preference-center"
import { Skeleton } from "@/components/ui/skeleton"

export default function ProfilePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Profile Management</h1>
      <div className="space-y-8">
        <Suspense fallback={<Skeleton className="h-[200px] w-full" />}>
          <ProfileForm />
        </Suspense>
        <Suspense fallback={<Skeleton className="h-[300px] w-full" />}>
          <AddressBook />
        </Suspense>
        <Suspense fallback={<Skeleton className="h-[200px] w-full" />}>
          <PreferenceCenter />
        </Suspense>
      </div>
    </div>
  )
}

