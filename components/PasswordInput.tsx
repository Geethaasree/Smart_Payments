import React, { FC, useState } from "react";
import { FormControl, FormField, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";

import { Control, FieldPath } from "react-hook-form";
import { z } from "zod";
import { authFormSchema } from "@/lib/utils";
import { Eye, EyeOff } from "lucide-react";

const formSchema = authFormSchema("sign-up");

interface PasswordInput {
  control: Control<z.infer<typeof formSchema>>;
  name: FieldPath<z.infer<typeof formSchema>>;
  label: string;
  placeholder: string;
}

const EyeIcon: FC<{
  showPassword: boolean;
  onClick: () => void;
  className: string;
}> = ({ showPassword, onClick, className }) => {
  const Icon = showPassword ? EyeOff : Eye;
  return (
    <div className={className} title={showPassword ? "Hide" : "Show"}>
      <Icon onClick={onClick} />
    </div>
  );
};

const PasswordInput = ({
  control,
  name,
  label,
  placeholder,
}: PasswordInput) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className="form-item relative">
          <FormLabel className="form-label">{label}</FormLabel>
          <div className="flex w-full flex-col">
            <FormControl>
              <Input
                placeholder={placeholder}
                className="input-class"
                type={showPassword ? "text" : "password"}
                {...field}
              />
            </FormControl>
            <EyeIcon
              className="absolute right-5 top-5 translate-y-full size-4"
              onClick={() => setShowPassword((pre) => !pre)}
              showPassword={showPassword}
            />
            <FormMessage className="form-message mt-2" />
          </div>
        </div>
      )}
    />
  );
};

export default PasswordInput;