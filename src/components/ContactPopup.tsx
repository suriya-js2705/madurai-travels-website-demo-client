import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon, Car, Clock, MapPin, Users, X, Loader2 } from "lucide-react"; 

import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { format } from "date-fns";
import { cn } from "@/lib/utils"; 

interface ContactPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const formSchema = z.object({
  serviceType: z.enum(["local", "rental", "outstation"], { required_error: "Please select a service type." }),
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  phone: z.string().optional(),
  numberOfPersons: z.coerce.number().positive("Please enter a valid number of persons."),
  pickupLocation: z.string().min(3, "Pickup location is required."),
  dropLocation: z.string().optional(),
  rentalPackage: z.string().optional(),
  destinationCity: z.string().optional(),
  pickupDate: z.date({ required_error: "A pickup date is required." }).refine(date => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); 
    return date >= today;
  }, "Pickup date cannot be in the past."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

const ContactPopup = ({ isOpen, onClose }: ContactPopupProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      numberOfPersons: 1, 
      pickupLocation: "",
      message: "",
    },
  });

  const serviceType = form.watch("serviceType");

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    console.log("Form data submitted:", data);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    toast({
      title: "Quote Request Sent! 📬",
      description: "Thank you! We'll contact you soon with the best quote.",
    });
    form.reset();
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      {/* MOBILE: Changed padding from default to p-4 on small screens and p-6 on larger screens */}
      <DialogContent className="sm:max-w-lg bg-white p-4 sm:p-6">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900 text-center">
            Plan Your Trip
          </DialogTitle>
          <DialogDescription className="text-center">
            Tell us your needs, and we'll get back to you with a quote.
          </DialogDescription>
        </DialogHeader>

        {/* MOBILE: Changed vertical spacing from default to space-y-3 on small screens and space-y-4 on larger screens */}
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 sm:space-y-4 mt-2">
          <Controller
            control={form.control}
            name="serviceType"
            render={({ field }) => (
              <div>
                <Label className="font-semibold">Select Service Type</Label>
                <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="grid grid-cols-3 gap-2 sm:gap-4 pt-2">
                  {["Local", "Rental", "Outstation"].map(type => (
                    <div key={type}>
                      <RadioGroupItem value={type.toLowerCase()} id={type.toLowerCase()} className="peer sr-only" />
                      {/* MOBILE: Reduced padding (p-2), icon size (h-5 w-5), and margin (mb-1) on small screens */}
                      <Label htmlFor={type.toLowerCase()} className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-2 sm:p-4 text-center hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-teal-500 [&:has([data-state=checked])]:border-teal-500 cursor-pointer">
                        {type === "Local" && <MapPin className="mb-1 h-5 w-5 sm:h-6 sm:w-6 sm:mb-2" />}
                        {type === "Rental" && <Clock className="mb-1 h-5 w-5 sm:h-6 sm:w-6 sm:mb-2" />}
                        {type === "Outstation" && <Car className="mb-1 h-5 w-5 sm:h-6 sm:w-6 sm:mb-2" />}
                        <span className="text-sm sm:text-base">{type}</span>
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
                {form.formState.errors.serviceType && <p className="text-sm text-red-500 mt-1">{form.formState.errors.serviceType.message}</p>}
              </div>
            )}
          />

          {serviceType && (
            <>
              { (serviceType === 'local' || serviceType === 'outstation') && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <InputWithLabel name="pickupLocation" label="Pickup Location" placeholder="e.g., Madurai Junction" form={form} />
                  <InputWithLabel 
                    name="dropLocation" 
                    label="Drop Location" 
                    placeholder={serviceType === 'outstation' ? "e.g., Yercaud" : "e.g., Meenakshi Amman Temple"} 
                    form={form} 
                  />
                </div>
              )}
              
              { serviceType === 'rental' && (
                <InputWithLabel name="pickupLocation" label="Pickup Location" placeholder="e.g., Your Hotel" form={form} />
              )}

              { serviceType === 'rental' && (
                <Controller
                  control={form.control}
                  name="rentalPackage"
                  render={({ field }) => (
                    <div>
                      <Label htmlFor="rental-package" className="font-semibold">Rental Package</Label>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <SelectTrigger id="rental-package">
                          <SelectValue placeholder="Select a package" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="2hr-20km">2 hours / 20 km</SelectItem>
                          <SelectItem value="4hr-40km">4 hours / 40 km</SelectItem>
                          <SelectItem value="8hr-80km">8 hours / 80 km</SelectItem>
                          <SelectItem value="full-day">Full Day (12 hours / 120 km)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  )}
                />
              )}

              { serviceType === 'outstation' && (
                 <InputWithLabel name="destinationCity" label="Destination City" placeholder="e.g., Salem" form={form} />
              )}
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <Controller
                  control={form.control}
                  name="pickupDate"
                  render={({ field }) => (
                      <div className="space-y-1">
                          <Label htmlFor="pickup-date">Pickup Date</Label>
                          <Popover>
                              <PopoverTrigger asChild>
                                  <Button
                                      variant={"outline"}
                                      className={cn("w-full justify-start text-left font-normal", !field.value && "text-muted-foreground")}
                                  >
                                      <CalendarIcon className="mr-2 h-4 w-4" />
                                      {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                                  </Button>
                              </PopoverTrigger>
                              <PopoverContent className="w-auto p-0">
                                  <Calendar mode="single" selected={field.value} onSelect={field.onChange} disabled={(date) => date < new Date(new Date().setHours(0,0,0,0))} initialFocus />
                              </PopoverContent>
                          </Popover>
                          {form.formState.errors.pickupDate && <p className="text-sm text-red-500 mt-1">{form.form.errors.pickupDate.message}</p>}
                      </div>
                  )}
                />
                
                <InputWithLabel name="numberOfPersons" label="Number of Persons" type="number" min="1" form={form} />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <InputWithLabel name="name" label="Full Name" placeholder="Your full name" form={form} />
                <InputWithLabel name="email" label="Email" type="email" placeholder="your@email.com" form={form} />
              </div>

               <div>
                  <Label htmlFor="message">Additional Details</Label>
                  <Textarea id="message" placeholder="e.g., Need a child seat, luggage details..." {...form.register("message")} />
                  {form.formState.errors.message && <p className="text-sm text-red-500 mt-1">{form.formState.errors.message.message}</p>}
                </div>
            </>
          )}

          <Button type="submit" disabled={isSubmitting} className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold">
            {isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Get My Quote"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

const InputWithLabel = ({ name, label, form, ...props }: any) => (
  <div className="space-y-1">
    <Label htmlFor={name}>{label}</Label>
    <Input id={name} {...form.register(name)} {...props} />
    {form.formState.errors[name] && <p className="text-sm text-red-500 mt-1">{form.formState.errors[name].message}</p>}
  </div>
);

export default ContactPopup;