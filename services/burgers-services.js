const burgersRepo = require('../repositories/burgers-repo');

const listAll = () => {
    return burgersRepo.listAll();
};

const findById = (id) => {
    return burgersRepo.findById(id);
};

const save = (burger) => {
    return burgersRepo.save(burger);
};

const update = (burger) => {
    return burgersRepo.update(burger);
};

const remove = (id) => {
    return burgersRepo.remove(id);
}

module.exports = {
    listAll,
    findById,
    save,
    update,
    remove
};