import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
// import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
//import { useState } from "react";

export function LoginModal({ open, onOpenChange }: { open: boolean; onOpenChange: (val: boolean) => void }) {
  //const [rememberMe, setRememberMe] = useState(false);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md w-full bg-white backdrop-blur-md">
        <DialogHeader>
          <DialogTitle className="text-center text-xl">Login</DialogTitle>
        </DialogHeader>

        <div className="space-y-4 mt-2">
          <div>
            <Label htmlFor="email">Username or Email Address</Label>
            <Input id="email" type="email" placeholder="example@mail.com" required />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" required />
          </div>
          <div className="flex items-center justify-between text-sm">
            {/* <div className="flex items-center gap-2">
              <Checkbox id="remember" checked={rememberMe} onCheckedChange={setRememberMe} />
              <label htmlFor="remember">Remember me</label>
            </div> */}
            <a href="#" className="text-xs text-gray-500 hover:underline">Forgot your password?</a>
          </div>
        </div>

        <DialogFooter className="mt-6 flex justify-end gap-2">
          <Button className="bg-red-600 text-white">Login</Button>
          <Button variant="outline">Register</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}