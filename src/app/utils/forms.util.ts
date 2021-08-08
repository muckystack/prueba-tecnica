/**
 * Crea el evento touch en todos los campos del formulario
 * @param formRegisterValidate Representa el formulario con sus campos
 */
export function touchForm(formRegisterValidate: any) {
  for (const key in formRegisterValidate.controls) {
    const element = (formRegisterValidate.controls[key].touched = true);
  }
}
