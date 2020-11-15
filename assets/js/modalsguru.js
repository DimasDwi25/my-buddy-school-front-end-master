class ModalsTake extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="modal fade" id="ModalTake" tabindex="-1" role="dialog"
        aria-labelledby="ModalTakeTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLongTitle">Confirmation</h5>
                </div>
                <div class="modal-body">
                    <p>Are you sure to activate this course?</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="cancel" data-dismiss="modal">Cancel</button>
                    <button type="button" class="confirms">OK</button>
                </div>
            </div>
        </div>
    </div>
    `;
    }
}

class ModalsQuit extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="modal fade" id="ModalQuit" tabindex="-1" role="dialog" aria-labelledby="ModalQuitTitle"
        aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLongTitle">Confirmation</h5>
                </div>
                <div class="modal-body">
                    <p>Are you sure to disable this course?</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="cancel" data-dismiss="modal">Cancel</button>
                    <button type="button" class="confirms">OK</button>
                </div>
            </div>
        </div>
    </div>
    `;
    }
}
class ModalsDelete extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="modal fade" id="ModalDelete" tabindex="-1" role="dialog" aria-labelledby="ModalDeleteTitle"
        aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLongTitle">Confirmation</h5>
                </div>
                <div class="modal-body">
                    <p>Are you sure to delete this course?</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="cancel" data-dismiss="modal">Cancel</button>
                    <button type="button" class="confirms">OK</button>
                </div>
            </div>
        </div>
    </div>
    `;
    }
}


class AddCourse extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="modal fade" id="AddQourse" tabindex="-1" role="dialog" aria-labelledby="ModalDeleteTitle"
        aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLongTitle">New Course</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                <form>
                      <div class="form-group">
                        <label>Title</label>
                        <input type="text" class="form-control" placeholder="Isi Judul">
                      </div>

                      <div class="form-group">
                        <label>Description</label>
                        <textarea rows="5" class="form-control" placeholder="Isi Deskripsi"></textarea>
                      </div>

                      <div class="form-group">
                        <label>Topic</label>
                        <select class="form-control">
                            <option>Natural Science</option>
                        </select>
                      </div>

                      <div class="form-group">
                        <label>Educational</label>
                        <select class="form-control">
                            <option>Primary School (SD)</option>
                            <option>Junior High School (SMP)</option>
                            <option>Senior High School (SMA)</option>
                            <option>High School (PT)</option>
                            <option>Other</option>
                        </select>
                      </div>

                      <div class="form-group">
                        <label for="exampleFormControlFile1">Cover</label>
                        <input type="file" class="form-control-file" id="exampleFormControlFile1">
                      </div>

                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
                        <label class="form-check-label" for="inlineRadio1">Active</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
                        <label class="form-check-label" for="inlineRadio2">Non Active</label>
                      </div>
                  </form>
                    <div class="button d-sm-none d-md-block">
                        <button class="keluar">Cancel</button>
                        <button class="simpan">Simpan</button>
                    </div>
                    <!--Mobile-->
                    <div class="row d-md-none d-sm-block">
                        <div class="col-md-4">
                            <div class="button">
                                <button class="keluar">Cancel</button>
                                <button class="simpan">Simpan</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
    }
}

class AddQuiz extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="modal fade" id="AddQuiz" tabindex="-1" role="dialog" aria-labelledby="ModalDeleteTitle"
        aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLongTitle">New Quiz</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                <form>
                      <div class="form-group">
                        <label>Title</label>
                        <input type="text" class="form-control" placeholder="Isi Judul">
                      </div>

                      <div class="form-group">
                        <label>Description</label>
                        <textarea rows="5" class="form-control" placeholder="Isi Deskripsi"></textarea>
                      </div>
                  </form>
                    <div class="button d-sm-none d-md-block">
                        <button class="keluar">Cancel</button>
                        <button class="simpan">Simpan</button>
                    </div>
                    <!--Mobile-->
                    <div class="row d-md-none d-sm-block">
                        <div class="col-md-4">
                            <div class="button">
                                <button class="keluar">Cancel</button>
                                <button class="simpan">Simpan</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
    }
}

class AddQuestion extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="modal fade" id="AddQuestion" tabindex="-1" role="dialog" aria-labelledby="ModalDeleteTitle"
        aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLongTitle">New Quiz</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                <form>
              <div class="form-group row description">
                <label class="col-sm-2 col-form-label">Description</label>
                <div class="col-sm-10">
                  <textarea type="text" class="form-control" placeholder="Add your question here......" rows="2"></textarea>
                  <div class="file">
                    <span>Add Image</span>
                    <input type="file" class="form-control-file" id="exampleFormControlFile1">
                  </div>
                  
                </div>
              </div>
              <fieldset class="form-group">
                <div class="row">
                  <label class="col-form-label col-sm-2 pt-0">Radios</label>
                  <div class="col-sm-10 list">
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1"
                        checked>
                      <label class="form-check-label form-control" for="gridRadios1">
                        Evaluasi Dan Adaptasi
                      </label>
                      <img src="../../assets/img/trash.png" alt="">
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2">
                      <label class="form-check-label form-control" for="gridRadios2">
                        Genetipe Dan Lingkungan
                      </label>
                      <img src="../../assets/img/trash.png" alt="">
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3">
                      <label class="form-check-label form-control" for="gridRadios3">
                        Seleksi Alam Dan Adaptasi
                      </label>
                      <img src="../../assets/img/trash.png" alt="">
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3">
                      <label class="form-check-label form-control" for="gridRadios3">
                        Adaptasi Dan Genotipe
                      </label>
                      <img src="../../assets/img/trash.png" alt="">
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3">
                      <label class="form-check-label form-control" for="gridRadios3">
                        Evolusi
                      </label>
                      <img src="../../assets/img/trash.png" alt="">
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <a href="" class="btn btn-primary">+</a>
                        <span>Add Schedule</span>
                      </div>
                    </div>
                  </div>
                </div>
              </fieldset>     
            </form>
                    <div class="button d-sm-none d-md-block">
                        <button class="keluar">Cancel</button>
                        <button class="simpan">Simpan</button>
                    </div>
                    <!--Mobile-->
                    <div class="row d-md-none d-sm-block">
                        <div class="col-md-4">
                            <div class="button">
                                <button class="keluar">Cancel</button>
                                <button class="simpan">Simpan</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
    }
}

customElements.define('modal-take', ModalsTake);
customElements.define('modal-quit', ModalsQuit);
customElements.define('modal-delete', ModalsDelete);
customElements.define('add-course', AddCourse);
customElements.define('add-quiz', AddQuiz);
customElements.define('add-question', AddQuestion);