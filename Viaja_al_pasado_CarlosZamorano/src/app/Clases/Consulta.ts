export class Consulta {

  constructor(
    public mail: string,
    public name: string,
    public subjet: string,
    public check: boolean,
    public body?: string,
) { }
}
