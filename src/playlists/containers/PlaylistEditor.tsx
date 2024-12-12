import React, { useEffect, useId, useState, type ChangeEvent } from "react";
import AppButton from "../../common/components/AppButton";
import type { Playlist } from "../../common/model/Playlist";
import { useFocus } from "../../common/hooks/useFocus";

import { Controller, useForm } from "react-hook-form";
import { InputText } from "primereact/inputtext";

type Props = {
  playlist?: Playlist;
  onCancel: () => void;
  onSave: (draft: Playlist) => void;
};
const EMPTY_PLAYLIST = { id: "", name: "", public: false, description: "" };

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
  });

  // const { name, onBlur, onChange, ref, disabled } = register("name");

  return (
    <form
      onSubmit={handleSubmit(
        (data) => {
          onSave(data);
        },
        (errors) => {
          errors.name?.message;
        }
      )}
    >
      <div className="grid gap-5">
        <div className="grid gap-2">
          <label>Name</label>

          <Controller
            name="name"
            control={control}
            render={({ field, fieldState }) => (
              <>
                <InputText type="text" {...field} />
                <div className="text-end">{field.value.length} / 100</div>
              </>
            )}
          />
        </div>

        <div className="grid gap-2">
          <label>
            <input type="checkbox" {...register("public")} />
            Public
          </label>
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
