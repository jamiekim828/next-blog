export default function getFormattedDate(dateString: string): string {
  const date = new Date(dateString);

  //   return new Intl.DateTimeFormat('en-US', { dateStyle: 'long' }).format(
  //     new Date(dateString)
  //   );

  return date.toString();
}
