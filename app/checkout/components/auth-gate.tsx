"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Facebook } from "lucide-react"

export default function AuthGate() {
  const [isGuest, setIsGuest] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    // Initialize New Relic RUM monitoring
    console.log("Initialize New Relic RUM monitoring")
  }, [])

  const handleFacebookLogin = async () => {
    setIsLoading(true)
    try {
      // TODO: Implement Facebook Login
      console.log("Implementing Facebook Login")
      await new Promise((resolve) => setTimeout(resolve, 1000))
    } catch (error) {
      console.error("Facebook login error:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Sign in to continue</CardTitle>
        <CardDescription>Sign in with Facebook or continue as a guest</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Button className="w-full" onClick={handleFacebookLogin} disabled={isLoading}>
          <Facebook className="mr-2 h-4 w-4" />
          {isLoading ? "Signing in..." : "Sign in with Facebook"}
        </Button>

        <div className="flex items-center justify-between">
          <Label htmlFor="guest-mode" className="flex flex-col space-y-1">
            <span>Continue as guest</span>
            <span className="text-sm text-muted-foreground">You can create an account later</span>
          </Label>
          <Switch id="guest-mode" checked={isGuest} onCheckedChange={setIsGuest} />
        </div>
      </CardContent>
      <CardFooter>
        <p className="text-sm text-muted-foreground">Your information is secure and encrypted</p>
      </CardFooter>
    </Card>
  )
}

