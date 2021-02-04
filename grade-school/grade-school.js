export class GradeSchool {
  constructor() {
    this._roster = new Map();
  }

  roster() {
    const roster = Object.fromEntries(this._roster);
    return Object.fromEntries(Object.entries(roster).map(([k, v]) => [k, [...v].sort()]));
  }

  add(student, grade) {
    for (const [grade, students] of this._roster) {
      if (students.has(student)) {
        this._roster.get(grade).delete(student);
        break;
      }
    }

    if (!this._roster.has(grade)) {
      this._roster.set(grade, new Set());
    }
    this._roster.get(grade).add(student);
  }

  grade(grade) {
    return this._roster.has(grade) ? [...this._roster.get(grade)].sort() : [];
  }
}
