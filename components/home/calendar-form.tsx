"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { toast } from "sonner";
import { FC } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";

const FormSchema = z.object({
  event: z.string({
    required_error: "An event is required.",
  }),
  date: z.date({
    required_error: "A date of event is required.",
  }),
  guests: z.string({
    required_error: "A guest number is required.",
  }),
});

enum Events {
  CHEESE_ON_THE_LAKE =  "Cheese on the Lake",
  LIQUID_SPIRIT_CRUISE = "Liquid Spirit Cruise" ,
  FUME_ON_THE_LAKE = "Fume on the Lake",
  FIRE_IN_THE_SKY = "Fire in the Sky" ,
}

export const CalendarForm: FC = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast("You submitted the following values:", {
      description: (
        <pre className="mt-2 w-full max-w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 grid grid-cols-2 md:grid-cols-4 items-end justify-center gap-4"
      >
        <FormField
          control={form.control}
          name="event"
          render={({ field }) => (
            <FormItem className="inline-grid">
              <FormLabel className="uppercase text-xs font-light">
                choose an event
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger
                    className={cn(
                      " pl-3 text-left font-normal py-7 text-xs",
                      !field.value && "text-muted-foreground"
                    )}
                    value={''}
                  >
                    {field.value ? (
                      field.value
                    ) : (
                      <span>Pick an event</span>
                    )}
                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {[Events.CHEESE_ON_THE_LAKE, Events.FIRE_IN_THE_SKY, Events.FUME_ON_THE_LAKE, Events.LIQUID_SPIRIT_CRUISE].map((event, i) => (
                  <SelectItem key={i} value={event}>{event}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem className="inline-grid">
              <FormLabel className="uppercase text-xs font-light">
                date
              </FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        " pl-3 text-left font-normal py-7 text-xs",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="guests"
          render={({ field }) => (
            <FormItem className="inline-grid">
              <FormLabel className="uppercase text-xs font-light">
                Guests:
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger
                    className={cn(
                      " pl-3 text-left font-normal py-7 text-xs",
                      !field.value && "text-muted-foreground"
                    )}
                    value={"1"}
                  >
                    {field.value ? (
                      field.value
                    ) : (
                      <span>Pick N° of Guests</span>
                    )}
                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {[...Array(20)].map((_nbr_guest, i_nbr_guest) => (
                  <SelectItem key={i_nbr_guest + 1} value={`${i_nbr_guest + 1}`}>{`${i_nbr_guest + 1}`}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="inline-flex py-7 text-card-foreground font-normal text-xs uppercase tracking-wider"
        >
          check avalaibility
        </Button>
      </form>
    </Form>
  );
};
