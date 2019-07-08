class CharacterModel {
  constructor(id, name, gender, eye_color, height, mass) {
    this.id = id;
    this.name = name;
    this.gender = gender;
    this.eye_color = eye_color;
    this.height = height;
    this.mass = mass;
    this.saved = false;
  }
}

export default CharacterModel
