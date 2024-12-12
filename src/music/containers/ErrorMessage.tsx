export const ErrorMessage = ({ error }: { error: unknown }) => (
  <>
    {error instanceof Error && (
      <p className="p-5 text-red-500 border border-solid border-red-500">
        {error.message}
      </p>
    )}
  </>
);
