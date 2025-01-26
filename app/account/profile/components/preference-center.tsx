"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { toast } from "@/components/ui/use-toast"

export default function PreferenceCenter() {
  const [preferences, setPreferences] = useState({
    emailNotifications: true,
    smsNotifications: false,
    productUpdates: true,
    promotions: true,
  })

  useEffect(() => {
    // TODO: Initialize OneTrust integration
    console.log("Initializing OneTrust integration")
  }, [])

  const handlePreferenceChange = (preference: string) => {
    setPreferences((prev) => ({ ...prev, [preference]: !prev[preference] }))
  }

  const handleSavePreferences = async () => {
    try {
      // TODO: Implement preference update logic with OneTrust
      await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulate API call
      toast({
        title: "Preferences Updated",
        description: "Your preferences have been successfully updated.",
      })
    } catch (error) {
      console.error("Error updating preferences:", error)
      toast({
        title: "Error",
        description: "Failed to update preferences. Please try again.",
        variant: "destructive",
      })
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Communication Preferences</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="emailNotifications"
            checked={preferences.emailNotifications}
            onCheckedChange={() => handlePreferenceChange("emailNotifications")}
          />
          <Label htmlFor="emailNotifications">Receive email notifications</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox
            id="smsNotifications"
            checked={preferences.smsNotifications}
            onCheckedChange={() => handlePreferenceChange("smsNotifications")}
          />
          <Label htmlFor="smsNotifications">Receive SMS notifications</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox
            id="productUpdates"
            checked={preferences.productUpdates}
            onCheckedChange={() => handlePreferenceChange("productUpdates")}
          />
          <Label htmlFor="productUpdates">Receive product updates</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox
            id="promotions"
            checked={preferences.promotions}
            onCheckedChange={() => handlePreferenceChange("promotions")}
          />
          <Label htmlFor="promotions">Receive promotional offers</Label>
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={handleSavePreferences}>Save Preferences</Button>
      </CardFooter>
    </Card>
  )
}

