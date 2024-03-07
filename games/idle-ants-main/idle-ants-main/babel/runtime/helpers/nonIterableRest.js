function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module._nonIterableRest = _nonIterableRest;