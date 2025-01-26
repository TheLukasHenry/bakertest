import ContactForm from "./components/contact-form"
import LocationMap from "./components/location-map"

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight mb-8">Contact Us</h1>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p className="text-muted-foreground mb-8">
              Have questions about our products or services? Our team is here to help.
            </p>
            <ContactForm />
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Visit Us</h2>
            <div className="space-y-4 mb-8">
              <p className="text-muted-foreground">
                123 Baker Street
                <br />
                Suite 100
                <br />
                Atlanta, GA 30308
              </p>
              <p className="text-muted-foreground">
                <strong>Phone:</strong> (555) 123-4567
                <br />
                <strong>Email:</strong> info@bakerhvac.com
              </p>
              <p className="text-muted-foreground">
                <strong>Hours:</strong>
                <br />
                Monday - Friday: 8:00 AM - 5:00 PM
                <br />
                Saturday: 9:00 AM - 2:00 PM
                <br />
                Sunday: Closed
              </p>
            </div>
            <LocationMap />
          </div>
        </div>
      </div>
    </div>
  )
}

