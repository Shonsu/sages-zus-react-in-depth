import React, { useEffect, useId, useState, type ChangeEvent } from "react";
import AppButton from "../../common/components/AppButton";
import type { Playlist } from "../../common/model/Playlist";
import { useFocus } from "../../common/hooks/useFocus";

import {
  Control,
  Controller,
  FieldValues,
  Path,
  useForm,
} from "react-hook-form";
import { InputText } from "primereact/inputtext";
import { Checkbox } from "primereact/checkbox";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

type Props = {
  playlist?: Playlist;
  onCancel: () => void;
  onSave: (draft: Playlist) => void;
};
const EMPTY_PLAYLIST = { id: "", name: "", public: false, description: "" };

const PlaylistSchema = z.object({
  id: z.string(),
  name: z
    .string()
    .nonempty('Field is required')
    .min(3, "Value too short!")
    .regex(/[A-Z].*/, "Must start with capital letter"),
  public: z.boolean(),
  description: z.string(),
});



const PlaylistEditor = ({
  onCancel,
  onSave,
  playlist: playlistToEdit = EMPTY_PLAYLIST,
}: Props) => {
  const {
    formState,
    getValues,
    handleSubmit,
    register,
    setFocus,
    control,
    watch,
  } = useForm({
    defaultValues: playlistToEdit,
    resolver: zodResolver(PlaylistSchema),
    mode: "all",
  });

  // const { name, onBlur, onChange, ref, disabled } = register("name");

  return (
    <form
      onSubmit={handleSubmit(
        (data) => {
          onSave(data);
        },
        (errors) => {
          debugger;
          errors.name?.message;
        }
      )}
    >
      <div className="grid gap-5">
        <div className="grid gap-2">
          <InputWithCounter control={control} name="name" label="Name" />
        </div>

        <div className="grid gap-2">
          <Checkbox2 control={control} name="public" label="Public" />
        </div>

        <div className="grid gap-2">
          <label>Description</label>
          <textarea {...register("description")}></textarea>
        </div>

        <div className="flex justify-between">
          <AppButton onClick={onCancel}>Cancel</AppButton>
          <AppButton type="submit">Save</AppButton>
        </div>
      </div>
    </form>
  );
};

export default PlaylistEditor;

type ControlProps<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;
  label: string;
};

const InputWithCounter = <T extends FieldValues>({
  control,
  name,
  label,
}: ControlProps<T>) => (
  <Controller
    name={name}
    control={control}
    render={({ field, fieldState, formState }) => (
      <>
        <label>{label}</label>
        <InputText type="text" {...field} />
        {(fieldState.isDirty || fieldState.isTouched) && (
          <>
            <p className="text-red-500">{fieldState.error?.message}</p>
          </>
        )}
        <div className="text-end">{field.value.length} / 100</div>
      </>
    )}
  />
);

const Checkbox2 = <T extends FieldValues>({
  control,
  name,
  label,
}: ControlProps<T>) => (
  <Controller
    name={name}
    control={control}
    render={({ field, fieldState }) => (
      <>
        <label>
          <Checkbox checked={field.value} {...field} />
          {label}
        </label>
      </>
    )}
  />
);
