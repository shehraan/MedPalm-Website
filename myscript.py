def add_one(event):
    pyscript.write("output", str(global_vars['internalCounter']), False)
    global_vars['internalCounter'] += 1
