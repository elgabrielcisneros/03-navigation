import React from "react";
import { Pressable, PressableProps, Text } from "react-native";

interface ButtonProps extends PressableProps {
  title: string;
  onPress: () => void;
  color?: "primary" | "secondary" | "tertiary";
  variant?: "contain" | "text-only";
  className?: string;
}

export default function Button({
  title,
  onPress,
  color = "primary",
  variant = "contain",
  className,
}: ButtonProps) {
  const pressableColor = {
    primary: "bg-primary",
    secondary: "bg-secondary",
    tertiary: "bg-tertiary",
  }[color];

  const textColor = {
    primary: "text-primary",
    secondary: "text-secondary",
    tertiary: "text-tertiary",
  }[color];

  if (variant === "text-only") {
    return (
      <Pressable onPress={onPress} className={`p-3 m-1 ${className}`}>
        <Text className={`font-work-medium text-center ${textColor}`}>
          {title}
        </Text>
      </Pressable>
    );
  }

  return (
    <Pressable
      onPress={onPress}
      className={`p-3 m-1 rounded-md ${pressableColor} ${className} active:opacity-90`}
    >
      <Text className="font-work-medium text-center text-white">{title}</Text>
    </Pressable>
  );
}
